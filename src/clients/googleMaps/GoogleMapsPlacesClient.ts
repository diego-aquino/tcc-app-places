import axios, { AxiosInstance } from 'axios';
import { createAxiosErrorFromResponse } from '../../utils/axios';

export interface PlaceLocation {
  lat: number;
  lng: number;
}

export interface PlaceGeometry {
  location: PlaceLocation;
  viewport: {
    northeast: PlaceLocation;
    southwest: PlaceLocation;
  };
}

export interface Place {
  place_id: string;
  name?: string;
  rating?: number;
  geometry?: PlaceGeometry;
  formatted_address?: string;
}

type PlaceSearchStatus =
  | 'OK'
  | 'ZERO_RESULTS'
  | 'INVALID_REQUEST'
  | 'OVER_QUERY_LIMIT'
  | 'REQUEST_DENIED'
  | 'UNKNOWN_ERROR';

export interface PlaceTextSearchResult {
  status: PlaceSearchStatus;
  html_attributions: string[];
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
  status: PlaceSearchStatus;
  html_attributions: string[];
  predictions: PlaceAutocompletePrediction[];
}

class GoogleMapsPlacesClient {
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

  async searchByText(query: string, options: { type: string }) {
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

    if (!this.isSuccessSearchStatus(response.data.status)) {
      throw createAxiosErrorFromResponse(response);
    }

    const places = response.data.results;
    return places;
  }

  async autocomplete(partialQuery: string) {
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

    if (!this.isSuccessSearchStatus(response.data.status)) {
      throw createAxiosErrorFromResponse(response);
    }

    const predictions = response.data.predictions;
    return predictions;
  }

  private isSuccessSearchStatus(status: PlaceSearchStatus) {
    return status === 'OK' || status === 'ZERO_RESULTS';
  }
}

export default GoogleMapsPlacesClient;
