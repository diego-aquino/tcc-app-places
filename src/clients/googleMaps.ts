import axios, { AxiosInstance } from 'axios';

export interface PlaceGeometry {
  location: {
    lat: number;
    lng: number;
  };
}

export interface Place {
  place_id: string;
  name?: string;
  formatted_address?: string;
  geometry?: PlaceGeometry;
  rating?: number;
}

export interface PlaceTextSearchResult {
  results: Place[];
}

class GoogleMapsClient {
  private api: {
    places: AxiosInstance;
  };

  constructor() {
    this.api = {
      places: axios.create({
        baseURL: process.env.GOOGLE_MAPS_PLACES_API_URL,
      }),
    };
  }

  async searchRestaurants(locationQuery: string) {
    const places = await this.searchPlaces(`restaurantes em ${locationQuery}`, {
      type: 'restaurant',
    });
    return places;
  }

  async searchPlaces(query: string, options: { type: string }) {
    const response = await this.api.places.get<PlaceTextSearchResult>(
      '/textsearch/json',
      {
        params: {
          query,
          language: 'pt-BR',
          type: options.type,
          fields: 'name,formatted_address,rating',
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    );

    const places = response.data.results;
    return places;
  }
}

export default GoogleMapsClient;
