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

import app, { AutocompleteSuggestion } from '../src/server/app';
import { PlaceAutocompleteSuggestion } from '../src/clients/googleMaps/GoogleMapsPlacesClient';
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
  const querySuggestions = {
    pizza: [
      {
        queryPrediction: {
          text: {
            text: 'pizza em Lisboa, Portugal',
            matches: [{ endOffset: 5 }, { startOffset: 9, endOffset: 12 }],
          },
          structuredFormat: {
            mainText: { text: 'pizza', matches: [{ endOffset: 5 }] },
            secondaryText: {
              text: 'em Lisboa, Portugal',
              matches: [{ startOffset: 3, endOffset: 6 }],
            },
          },
        },
      },
      {
        queryPrediction: {
          text: {
            text: 'pizza em Lisle, Illinois, EUA',
            matches: [{ endOffset: 5 }, { startOffset: 9, endOffset: 12 }],
          },
          structuredFormat: {
            mainText: { text: 'pizza', matches: [{ endOffset: 5 }] },
            secondaryText: {
              text: 'em Lisle, Illinois, EUA',
              matches: [{ startOffset: 3, endOffset: 6 }],
            },
          },
        },
      },
    ],
  } satisfies Record<string, PlaceAutocompleteSuggestion[]>;

  const defaultAutocompleteQuery = {
    languageCode: 'pt-BR',
    includeQueryPredictions: true,
  } satisfies Partial<
    GooglePlacesOperations['Places_AutocompletePlaces']['request']['body']
  >;

  beforeAll(async () => {
    await interceptor.start();

    await app.ready();
  });

  beforeEach(async () => {
    interceptor.post('/places:autocomplete').respond({
      status: 200,
      body: {
        suggestions: [],
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
      .post('/places:autocomplete')
      .with({
        body: {
          ...defaultAutocompleteQuery,
          input: searchQuery,
        },
      })
      .respond({
        status: 200,
        body: {
          suggestions: querySuggestions.pizza,
        },
      });

    const response = await supertest(app.server)
      .get('/places/autocomplete')
      .query({
        query: searchQuery,
      });

    expect(response.status).toBe(200);

    const predictions = response.body as AutocompleteSuggestion[];
    expect(predictions).toHaveLength(querySuggestions.pizza.length);

    expect(predictions).toEqual<AutocompleteSuggestion[]>([
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
      .post('/places:autocomplete')
      .with({
        body: {
          ...defaultAutocompleteQuery,
          input: 'pizza em l',
        },
      })
      .respond({
        status: 500,
        body: {
          message: 'Unknown error',
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
