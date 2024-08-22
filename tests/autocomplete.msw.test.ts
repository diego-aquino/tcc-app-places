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

import app, { PlaceAutocompleteSuggestion } from '../src/server/app';
import {
  PlaceAutocompletePrediction,
  PlaceAutocompleteResult,
} from '../src/clients/googleMaps/GoogleMapsPlacesClient';

const GOOGLE_MAPS_PLACES_API_URL = process.env.GOOGLE_MAPS_PLACES_API_URL;

const interceptorServer = setupServer(
  http.get(`${GOOGLE_MAPS_PLACES_API_URL}/queryautocomplete/json`, () => {
    return Response.json(
      {
        status: 'ZERO_RESULTS',
        predictions: [],
      } satisfies PlaceAutocompleteResult,
      { status: 200 },
    );
  }),
);

describe('Autocomplete', () => {
  const queryPredictions = {
    pizza: [
      {
        description: 'pizza em Lisboa, Portugal',
        matched_substrings: [
          { length: 5, offset: 0 },
          { length: 3, offset: 9 },
        ],
        structured_formatting: {
          main_text: 'pizza',
          main_text_matched_substrings: [{ length: 5, offset: 0 }],
          secondary_text: 'em Lisboa, Portugal',
          secondary_text_matched_substrings: [{ length: 3, offset: 3 }],
        },
        terms: [
          { offset: 0, value: 'pizza' },
          { offset: 6, value: 'em' },
          { offset: 9, value: 'Lisboa' },
          { offset: 17, value: 'Portugal' },
        ],
      },
      {
        description: 'pizza em Lisle, Illinois, EUA',
        matched_substrings: [
          { length: 5, offset: 0 },
          { length: 3, offset: 9 },
        ],
        structured_formatting: {
          main_text: 'pizza',
          main_text_matched_substrings: [{ length: 5, offset: 0 }],
          secondary_text: 'em Lisle, Illinois, EUA',
          secondary_text_matched_substrings: [{ length: 3, offset: 3 }],
        },
        terms: [
          { offset: 0, value: 'pizza' },
          { offset: 6, value: 'em' },
          { offset: 9, value: 'Lisle' },
          { offset: 16, value: 'Illinois' },
          { offset: 26, value: 'EUA' },
        ],
      },
    ],
  } satisfies Record<string, PlaceAutocompletePrediction[]>;

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
      .get('/places/autocomplete')
      .query({
        query: 'pizza em l',
      });

    expect(response.status).toBe(200);
    console.log(response.body);
  });

  test('caso 1: sucesso (2XX)', async () => {
    const searchQuery = 'pizza em l';

    interceptorServer.use(
      http.get(
        `${GOOGLE_MAPS_PLACES_API_URL}/queryautocomplete/json`,
        ({ request }) => {
          const url = new URL(request.url);

          if (url.searchParams.get('input') === searchQuery) {
            return Response.json(
              {
                status: 'OK',
                predictions: queryPredictions.pizza,
              } satisfies PlaceAutocompleteResult,
              { status: 200 },
            );
          }

          return Response.json(
            {
              status: 'ZERO_RESULTS',
              predictions: [],
            } satisfies PlaceAutocompleteResult,
            { status: 200 },
          );
        },
      ),
    );

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
        text: 'pizza em Lisboa, Portugal',
        formattedText: '**pizza** em **Lis**boa, Portugal',
      },
      {
        text: 'pizza em Lisle, Illinois, EUA',
        formattedText: '**pizza** em **Lis**le, Illinois, EUA',
      },
    ]);
  });

  test('caso 2: erro (4XX ou 5XX)', async () => {
    interceptorServer.use(
      http.get(`${GOOGLE_MAPS_PLACES_API_URL}/queryautocomplete/json`, () => {
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
      .get('/places/autocomplete')
      .query({
        query: 'pizza em l',
      });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: 'Internal server error',
    });
  });
});
