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

import app from '../src/server/app';

describe('Example', () => {
  beforeAll(async () => {
    await app.ready();
  });

  beforeEach(async () => {});

  afterEach(async () => {});

  afterAll(async () => {
    await app.close();
  });

  // Exemplo (para habilitar, remova o `.skip`)
  test.skip('example', async () => {
    const response = await supertest(app.server).get('/');
    expect(response.status).toBe(200);
  });

  test('case 1', async () => {
    // Implemente aqui...
  });

  test('case 2', async () => {
    // Implemente aqui...
  });
});
