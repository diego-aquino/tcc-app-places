import { AxiosError, AxiosResponse } from 'axios';

export function createAxiosErrorFromResponse(response: AxiosResponse) {
  return AxiosError.from(
    response,
    response.statusText,
    response.config,
    response.request,
    response,
  );
}
