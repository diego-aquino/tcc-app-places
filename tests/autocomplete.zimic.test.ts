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

import app, { PlaceAutocompleteSuggestion } from '../src/server/app';
import { PlaceAutocompletePrediction } from '../src/clients/googleMaps/GoogleMapsPlacesClient';
import { httpInterceptor } from 'zimic/interceptor/http';
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

describe('Autocomplete', () => {
  const queryPredictions = {
    pizza: [
      {
        description: 'pizza em Los Angeles, CA, EUA',
        matched_substrings: [
          { length: 5, offset: 0 },
          { length: 1, offset: 9 },
        ],
        structured_formatting: {
          main_text: 'pizza',
          main_text_matched_substrings: [{ length: 5, offset: 0 }],
          secondary_text: 'em Los Angeles, CA, EUA',
          secondary_text_matched_substrings: [{ length: 1, offset: 3 }],
        },
        terms: [
          { offset: 0, value: 'pizza' },
          { offset: 6, value: 'em' },
          { offset: 9, value: 'Los Angeles' },
          { offset: 22, value: 'CA' },
          { offset: 26, value: 'EUA' },
        ],
      },
      {
        description: 'pizza em Las Vegas, NV, EUA',
        matched_substrings: [
          { length: 5, offset: 0 },
          { length: 1, offset: 9 },
        ],
        structured_formatting: {
          main_text: 'pizza',
          main_text_matched_substrings: [{ length: 5, offset: 0 }],
          secondary_text: 'em Las Vegas, NV, EUA',
          secondary_text_matched_substrings: [{ length: 1, offset: 3 }],
        },
        terms: [
          { offset: 0, value: 'pizza' },
          { offset: 6, value: 'em' },
          { offset: 9, value: 'Las Vegas' },
          { offset: 20, value: 'NV' },
          { offset: 24, value: 'EUA' },
        ],
      },
    ],
  } satisfies Record<string, PlaceAutocompletePrediction[]>;

  const defaultAutocompleteQuery = {
    language: 'pt-BR',
    radius: `${10000}`,
  } satisfies Partial<
    GooglePlacesOperations['autocomplete']['request']['searchParams']
  >;

  beforeAll(async () => {
    await interceptor.start();

    await app.ready();
  });

  beforeEach(async () => {
    interceptor.get('/queryautocomplete/json').respond({
      status: 200,
      body: {
        status: 'ZERO_RESULTS',
        predictions: [],
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
      .get('/places/autocomplete')
      .query({
        query: 'pizza em l',
      });

    expect(response.status).toBe(200);
    console.log(response.body);
  });

  test('caso 1: sucesso (2XX)', async () => {
    const searchQuery = 'pizza em l';

    const autocompleteHandler = interceptor
      .get('/queryautocomplete/json')
      .with({
        searchParams: {
          ...defaultAutocompleteQuery,
          input: searchQuery,
        },
      })
      .respond({
        status: 200,
        body: {
          status: 'OK',
          predictions: queryPredictions.pizza,
        },
      });

    const response = await supertest(app.server)
      .get('/places/autocomplete')
      .query({
        query: searchQuery,
      });

    expect(response.status).toBe(200);

    const predictions = response.body as PlaceAutocompletePrediction[];
    expect(predictions).toHaveLength(queryPredictions.pizza.length);

    expect(predictions).toEqual<PlaceAutocompleteSuggestion[]>([
      {
        text: 'pizza em Los Angeles, CA, EUA',
        formattedText: '**pizza** em **L**os Angeles, CA, EUA',
      },
      {
        text: 'pizza em Las Vegas, NV, EUA',
        formattedText: '**pizza** em **L**as Vegas, NV, EUA',
      },
    ]);

    expect(autocompleteHandler.requests()).toHaveLength(1);
  });

  test('caso 2: erro (4XX ou 5XX)', async () => {
    const autocompleteHandler = interceptor
      .get('/queryautocomplete/json')
      .with({
        searchParams: {
          ...defaultAutocompleteQuery,
          input: 'pizza em l',
        },
      })
      .respond({
        status: 200,
        body: {
          status: 'UNKNOWN_ERROR',
          predictions: [],
        },
      });

    const response = await supertest(app.server)
      .get('/places/autocomplete')
      .query({
        query: 'pizza em l',
      });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: 'Internal server error',
    });

    expect(autocompleteHandler.requests()).toHaveLength(1);
  });
});
