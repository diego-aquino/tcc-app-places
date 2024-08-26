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
import { Place } from '../src/clients/googleMaps/GoogleMapsPlacesClient';
import {
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
        formatted_address: '20 Sherwood St, London W1F 7ED, Reino Unido',
        geometry: {
          location: {
            lat: 51.5105561,
            lng: -0.1355974,
          },
          viewport: {
            northeast: {
              lat: 51.51199682989272,
              lng: -0.1342086701072778,
            },
            southwest: {
              lat: 51.50929717010727,
              lng: -0.1369083298927222,
            },
          },
        },
        name: 'Brasserie Zédel',
        place_id: 'ChIJl-cjD9QEdkgRVkkQt3pySRI',
        rating: 4.5,
      },
      {
        formatted_address: '35-37 Heddon St, London W1B 4BR, Reino Unido',
        geometry: {
          location: {
            lat: 51.5113964,
            lng: -0.1396951,
          },
          viewport: {
            northeast: {
              lat: 51.51276382989273,
              lng: -0.1381331201072778,
            },
            southwest: {
              lat: 51.51006417010728,
              lng: -0.1408327798927222,
            },
          },
        },
        name: 'Sabor',
        place_id: 'ChIJoXHzltUEdkgRc7QLGWRren0',
        rating: 4.6,
      },
    ],
  } satisfies Record<string, Place[]>;

  const defaultTextSearchQuery = {
    language: 'pt-BR',
    type: 'restaurant',
    radius: `${10000}`,
  } satisfies Partial<
    GooglePlacesOperations['textSearch']['request']['searchParams']
  >;

  beforeAll(async () => {
    await interceptor.start();

    await app.ready();
  });

  beforeEach(async () => {
    interceptor.get('/textsearch/json').respond({
      status: 200,
      body: {
        status: 'ZERO_RESULTS',
        html_attributions: [],
        results: [],
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
      .get('/textsearch/json')
      .with({
        searchParams: {
          ...defaultTextSearchQuery,
          query: 'restaurantes em Londres',
        },
        exact: true,
      })
      .respond({
        status: 200,
        body: {
          status: 'OK',
          html_attributions: [],
          results: restaurantPlaces.london,
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
        latitude: restaurantPlace.geometry?.location.lat,
        longitude: restaurantPlace.geometry?.location.lng,
        formattedAddress: restaurantPlace.formatted_address,
      };

      expect(restaurant).toEqual<Restaurant>({
        id: restaurantPlace.place_id,
        name: restaurantPlace.name,
        rating: restaurantPlace.rating,
        location,
      });
    }

    expect(textSearchHandler.requests()).toHaveLength(1);
  });

  test('caso 2: erro (4XX ou 5XX)', async () => {
    const textSearchHandler = interceptor
      .get('/textsearch/json')
      .with({
        searchParams: {
          ...defaultTextSearchQuery,
          query: 'restaurantes em Londres',
        },
        exact: true,
      })
      .respond({
        status: 200,
        body: {
          error_message:
            'See documentation for valid queries. https://developers.google.com/maps/documentation/places/web-service/search-text#TextSearchRequests',
          html_attributions: [],
          results: [],
          status: 'INVALID_REQUEST',
        },
      });

    const response = await supertest(app.server)
      .get('/places/restaurants')
      .query({
        query: 'Londres',
      });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: 'Internal server error',
    });

    expect(textSearchHandler.requests()).toHaveLength(1);
  });
});
