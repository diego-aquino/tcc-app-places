import axios, { AxiosInstance } from 'axios';

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

  async example() {
    const response = await this.api.places.get<never>('/example');

    const data = response.data;
    return data;
  }
}

export default GoogleMapsClient;
