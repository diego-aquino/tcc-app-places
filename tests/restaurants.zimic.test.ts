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

import app, { Restaurant } from '../src/server/app';
import { Place } from '../src/clients/googleMaps/GoogleMapsPlacesClient';
import { GooglePlacesSchema } from '../src/clients/googleMaps/types.generated';

const GOOGLE_MAPS_PLACES_API_URL = process.env.GOOGLE_MAPS_PLACES_API_URL;

httpInterceptor.default.onUnhandledRequest({ log: false });

const interceptor = httpInterceptor.create<GooglePlacesSchema>({
  type: 'local',
  baseURL: GOOGLE_MAPS_PLACES_API_URL,
  saveRequests: true,
});

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
    await interceptor.start();

    await app.ready();
  });

  beforeEach(async () => {});

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
        searchParams: { query: 'restaurantes em Londres' },
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

    expect(textSearchHandler.requests()).toHaveLength(1);
  });

  test('caso 2: erro (4XX ou 5XX)', async () => {
    const textSearchHandler = interceptor
      .get('/textsearch/json')
      .with({
        searchParams: { query: 'restaurantes em Londres' },
      })
      .respond({
        status: 200,
        body: {
          status: 'UNKNOWN_ERROR',
          html_attributions: [],
          results: [],
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
