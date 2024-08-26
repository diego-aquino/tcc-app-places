import supertest from 'supertest';
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from 'vitest';
import { setupServer } from 'msw/node';
import { http } from 'msw';

import app, { Restaurant, RestaurantLocation } from '../src/server/app';
import {
  Place,
  PlaceTextSearchResult,
} from '../src/clients/googleMaps/GoogleMapsPlacesClient';

const GOOGLE_MAPS_PLACES_API_URL = process.env.GOOGLE_MAPS_PLACES_API_URL;

const interceptorServer = setupServer(
  http.get(`${GOOGLE_MAPS_PLACES_API_URL}/places:searchText`, () => {
    return Response.json(
      {
        places: [],
      } satisfies PlaceTextSearchResult,
      { status: 200 },
    );
  }),
);

describe('Restaurants', () => {
  const restaurantPlaces = {
    london: [
      {
        id: 'ChIJ3Qt2HU3LHg0RErFZs07tcZ0',
        formattedAddress:
          'Pavilhão Poente (ao lado do MAAT, Av. Brasília, 1300-598 Lisboa, Portugal',
        location: {
          latitude: 38.6963541,
          longitude: -9.191757299999999,
        },
        rating: 4.5,
        displayName: { text: 'SUD Lisboa', languageCode: 'pt-PT' },
      },
      {
        id: 'ChIJmUOQv5g0GQ0RQXio4tGUxDM',
        formattedAddress: 'R. do Olival 258, 1200-744 Lisboa, Portugal',
        location: {
          latitude: 38.704848999999996,
          longitude: -9.166345699999999,
        },
        rating: 4.8,
        displayName: { text: 'Come Prima', languageCode: 'pt' },
      },
    ],
  } satisfies Record<string, Place[]>;

  beforeAll(async () => {
    interceptorServer.listen({
      onUnhandledRequest: 'bypass',
    });

    await app.ready();
  });

  beforeEach(async () => {});

  afterEach(async () => {
    interceptorServer.resetHandlers();
  });

  afterAll(async () => {
    await app.close();

    interceptorServer.close();
  });

  test.skip('exemplo', async () => {
    const response = await supertest(app.server)
      .get('/places/restaurants')
      .query({
        query: 'Campina Grande, PB',
      });

    expect(response.status).toBe(200);
    console.log(response.body);
  });

  test('caso 1: sucesso (2XX)', async () => {
    interceptorServer.use(
      http.post(
        `${GOOGLE_MAPS_PLACES_API_URL}/places:searchText`,
        async ({ request }) => {
          const body = await request.json();

          if (
            typeof body === 'object' &&
            body !== null &&
            body.textQuery === 'restaurantes em Londres'
          ) {
            return Response.json(
              {
                places: restaurantPlaces.london,
              } satisfies PlaceTextSearchResult,
              { status: 200 },
            );
          }

          return Response.json(
            {
              places: [],
            } satisfies PlaceTextSearchResult,
            { status: 200 },
          );
        },
      ),
    );

    const response = await supertest(app.server)
      .get('/places/restaurants')
      .query({
        query: 'Londres',
      });

    expect(response.status).toBe(200);

    const expectedRestaurantPlaces = [
      restaurantPlaces.london[1],
      restaurantPlaces.london[0],
    ];

    const restaurants = response.body as Restaurant[];
    expect(restaurants).toHaveLength(expectedRestaurantPlaces.length);

    for (const [index, restaurantPlace] of expectedRestaurantPlaces.entries()) {
      const restaurant = restaurants[index];

      const location: RestaurantLocation = {
        latitude: restaurantPlace.location.latitude,
        longitude: restaurantPlace.location.longitude,
        formattedAddress: restaurantPlace.formattedAddress,
      };

      expect(restaurant).toEqual<Restaurant>({
        id: restaurantPlace.id,
        name: restaurantPlace.displayName.text,
        rating: restaurantPlace.rating,
        location,
      });
    }
  });

  test('caso 2: erro (4XX ou 5XX)', async () => {
    interceptorServer.use(
      http.post(`${GOOGLE_MAPS_PLACES_API_URL}/places:searchText`, () => {
        return Response.json(
          {
            error: {
              code: 400,
              message: 'Empty text_query.\n',
              status: 'INVALID_ARGUMENT',
            },
          },
          { status: 400 },
        );
      }),
    );

    const response = await supertest(app.server)
      .get('/places/restaurants')
      .query({
        query: '',
      });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: 'Internal server error',
    });
  });
});
