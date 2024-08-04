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

export interface PlaceAutocompleteMatch {
  length: number;
  offset: number;
}

export interface PlaceAutocompletePrediction {
  description: string;
  matched_substrings: PlaceAutocompleteMatch[];
}

export interface PlaceAutocompleteResult {
  predictions: PlaceAutocompletePrediction[];
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

  async searchPlaces(query: string, options: { type: string }) {
    const response = await this.api.places.get<PlaceTextSearchResult>(
      '/textsearch/json',
      {
        params: {
          query,
          language: 'pt-BR',
          type: options.type,
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    );

    const places = response.data.results;
    return places;
  }

  async autocompletePlacesSearch(partialQuery: string) {
    const response = await this.api.places.get<PlaceAutocompleteResult>(
      'queryautocomplete/json',
      {
        params: {
          input: partialQuery,
          language: 'pt-BR',
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    );

    const predictions = response.data.predictions;
    return predictions;
  }
}

export default GoogleMapsClient;
