import fastify from 'fastify';
import { z } from 'zod';

import GoogleMapsClient from '../clients/googleMaps';
import { handleServerError } from './errors';

const app = fastify({
  logger: true,
  disableRequestLogging: process.env.NODE_ENV === 'test',
});

const api = {
  googleMaps: new GoogleMapsClient(),
};

interface RestaurantAddress {
  latitude?: number;
  longitude?: number;
  formattedAddress?: string;
}

interface Restaurant {
  id: string;
  name?: string;
  rating?: number;
  location: RestaurantAddress;
}

const searchRestaurantsSchema = z.object({
  query: z.string().min(1),
});

app.get('/restaurants', async (request, reply) => {
  const { query } = searchRestaurantsSchema.parse(request.query);

  const places = await api.googleMaps.searchRestaurants(query);

  const restaurants = places
    .map((place) => {
      const restaurant: Restaurant = {
        id: place.place_id,
        name: place.name,
        rating: place.rating,
        location: {
          latitude: place.geometry?.location.lat,
          longitude: place.geometry?.location.lng,
          formattedAddress: place.formatted_address,
        },
      };

      return restaurant;
    })
    .sort((restaurant, otherRestaurant) => {
      const rating = restaurant.rating ?? 0;
      const otherRating = otherRestaurant.rating ?? 0;
      return otherRating - rating;
    });

  return reply.status(200).send(restaurants);
});

app.setErrorHandler(handleServerError);

export default app;
