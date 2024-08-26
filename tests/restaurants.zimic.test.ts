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
import { httpInterceptor } from 'zimic/interceptor/http';

import app, { Restaurant, RestaurantLocation } from '../src/server/app';
import {
  GooglePlacesComponents,
  GooglePlacesOperations,
  GooglePlacesSchema,
} from '../src/clients/googleMaps/types.generated';

const GOOGLE_MAPS_PLACES_API_URL = process.env.GOOGLE_MAPS_PLACES_API_URL;

httpInterceptor.default.onUnhandledRequest(async (request, context) => {
  const url = new URL(request.url);

  if (url.hostname !== '127.0.0.1') {
    await context.log();
  }
});

const interceptor = httpInterceptor.create<GooglePlacesSchema>({
  type: 'local',
  baseURL: GOOGLE_MAPS_PLACES_API_URL,
  saveRequests: true,
});

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
  } satisfies Record<string, GooglePlacesComponents['schemas']['Place'][]>;

  const defaultTextSearchBody = {
    languageCode: 'pt-BR',
    includedType: 'restaurant',
  } satisfies Partial<
    GooglePlacesOperations['Places_SearchText']['request']['body']
  >;

  beforeAll(async () => {
    await interceptor.start();

    await app.ready();
  });

  beforeEach(async () => {
    interceptor.post('/places:searchText').respond({
      status: 200,
      body: {
        places: [],
      },
    });
  });

  afterEach(async () => {
    interceptor.clear();
  });

  afterAll(async () => {
    await app.close();

    await interceptor.stop();
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
    const textSearchHandler = interceptor
      .post('/places:searchText')
      .with({
        body: {
          ...defaultTextSearchBody,
          textQuery: 'restaurantes em Londres',
        },
        exact: true,
      })
      .respond({
        status: 200,
        body: {
          places: restaurantPlaces.london,
        },
      });

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

    expect(textSearchHandler.requests()).toHaveLength(1);
  });

  test('caso 2: erro (4XX ou 5XX)', async () => {
    const textSearchHandler = interceptor
      .post('/places:searchText')
      .with({
        body: {
          ...defaultTextSearchBody,
          textQuery: '',
          includedType: '',
        },
        exact: true,
      })
      .respond({
        status: 400,
        body: {
          error: {
            code: 400,
            message: 'Empty text_query.\n',
            status: 'INVALID_ARGUMENT',
          },
        },
      });

    const response = await supertest(app.server)
      .get('/places/restaurants')
      .query({
        query: '',
      });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: 'Internal server error',
    });

    expect(textSearchHandler.requests()).toHaveLength(1);
  });
});
