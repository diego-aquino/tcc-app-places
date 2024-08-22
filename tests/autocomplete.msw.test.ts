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

import app, { AutocompleteSuggestion } from '../src/server/app';
import {
  PlaceAutocompleteSuggestion,
  PlaceAutocompleteResult,
} from '../src/clients/googleMaps/GoogleMapsPlacesClient';

const GOOGLE_MAPS_PLACES_API_URL = process.env.GOOGLE_MAPS_PLACES_API_URL;

const interceptorServer = setupServer(
  http.post(`${GOOGLE_MAPS_PLACES_API_URL}/places:autocomplete`, () => {
    return Response.json(
      {
        suggestions: [],
      } satisfies PlaceAutocompleteResult,
      { status: 200 },
    );
  }),
);

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
      http.post(
        `${GOOGLE_MAPS_PLACES_API_URL}/places:autocomplete`,
        async ({ request }) => {
          const body = await request.json();

          if (
            typeof body === 'object' &&
            body !== null &&
            body.input === 'pizza em l'
          ) {
            return Response.json(
              {
                suggestions: querySuggestions.pizza,
              } satisfies PlaceAutocompleteResult,
              { status: 200 },
            );
          }

          return Response.json(
            {
              suggestions: [],
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
  });

  test('caso 2: erro (4XX ou 5XX)', async () => {
    interceptorServer.use(
      http.post(`${GOOGLE_MAPS_PLACES_API_URL}/places:autocomplete`, () => {
        return Response.json({ message: 'Unknown error' }, { status: 500 });
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
