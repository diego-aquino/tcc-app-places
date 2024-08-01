import fastify from 'fastify';
import GoogleMapsClient from '../clients/googleMaps';
import { handleServerError } from './errors';

const app = fastify({
  logger: true,
  disableRequestLogging: process.env.NODE_ENV === 'test',
});

const api = {
  location: new GoogleMapsClient(),
};

app.get('/example', async (_request, reply) => {
  return reply.status(200).send({ ok: true });
});

app.setErrorHandler(handleServerError);

export default app;
