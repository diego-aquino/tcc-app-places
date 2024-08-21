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

import app, { Restaurant } from '../src/server/app';
import { Place } from '../src/clients/googleMaps/GoogleMapsPlacesClient';

const GOOGLE_MAPS_PLACES_API_URL = process.env.GOOGLE_MAPS_PLACES_API_URL;

const interceptorServer = setupServer(
  http.get(`${GOOGLE_MAPS_PLACES_API_URL}/textsearch/json`, () => {
    return Response.json({ results: [] }, { status: 200 });
  }),
);

describe('Restaurants', () => {
  const restaurantPlaces = {
    london: [
      {
        place_id: 'ChIJl-cjD9QEdkgRVkkQt3pySRI',
        name: 'Brasserie Zédel',
        formatted_address: '20 Sherwood St, London W1F 7ED, Reino Unido',
        geometry: {
          location: { lat: 51.5105561, lng: -0.1355974 },
          viewport: {
            northeast: { lat: 51.51199682989272, lng: -0.1342086701072778 },
            southwest: { lat: 51.50929717010727, lng: -0.1369083298927222 },
          },
        },
        rating: 4.5,
      },
      {
        place_id: 'ChIJoXHzltUEdkgRc7QLGWRren0',
        name: 'Sabor',
        formatted_address: '35-37 Heddon St, London W1B 4BR, Reino Unido',
        geometry: {
          location: { lat: 51.5113964, lng: -0.1396951 },
          viewport: {
            northeast: { lat: 51.51276382989273, lng: -0.1381331201072778 },
            southwest: { lat: 51.51006417010728, lng: -0.1408327798927222 },
          },
        },
        rating: 4.6,
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
      http.get(
        `${GOOGLE_MAPS_PLACES_API_URL}/textsearch/json`,
        ({ request }) => {
          const { searchParams } = new URL(request.url);

          if (searchParams.get('query') === 'restaurantes em Londres') {
            return Response.json(
              {
                status: 'OK',
                html_attributions: [],
                results: restaurantPlaces.london,
              },
              { status: 200 },
            );
          }

          return Response.json({ results: [] }, { status: 200 });
        },
      ),
    );

    const response = await supertest(app.server)
      .get('/places/restaurants')
      .query({
        query: 'Londres',
      });

    expect(response.status).toBe(200);

    const restaurants = response.body as Restaurant[];
    expect(restaurants).toHaveLength(2);

    expect(restaurants[0]).toEqual<Restaurant>({
      id: restaurantPlaces.london[1].place_id,
      name: restaurantPlaces.london[1].name,
      rating: restaurantPlaces.london[1].rating,
      location: {
        latitude: restaurantPlaces.london[1].geometry?.location.lat,
        longitude: restaurantPlaces.london[1].geometry?.location.lng,
        formattedAddress: restaurantPlaces.london[1].formatted_address,
      },
    });

    expect(restaurants[1]).toEqual<Restaurant>({
      id: restaurantPlaces.london[0].place_id,
      name: restaurantPlaces.london[0].name,
      rating: restaurantPlaces.london[0].rating,
      location: {
        latitude: restaurantPlaces.london[0].geometry?.location.lat,
        longitude: restaurantPlaces.london[0].geometry?.location.lng,
        formattedAddress: restaurantPlaces.london[0].formatted_address,
      },
    });
  });

  test('caso 2: erro (4XX ou 5XX)', async () => {
    interceptorServer.use(
      http.get(`${GOOGLE_MAPS_PLACES_API_URL}/textsearch/json`, () => {
        return Response.json(
          {
            status: 'UNKNOWN_ERROR',
            html_attributions: [],
            results: [],
          },
          { status: 200 },
        );
      }),
    );

    const response = await supertest(app.server)
      .get('/places/restaurants')
      .query({
        query: 'Londres',
      });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: 'Internal server error',
    });
  });
});
