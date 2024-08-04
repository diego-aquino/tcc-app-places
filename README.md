# tcc-app-restaurants

## Google Maps - Places API

- OpenAPI:

  - Versão antiga:
    [`openapi.yaml`](https://raw.githubusercontent.com/googlemaps/openapi-specification/main/dist/google-maps-platform-openapi3.yml)
    ([Visualizar no Swagger UI](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/googlemaps/openapi-specification/main/dist/google-maps-platform-openapi3.yml))
  - Versão nova:
    [`openapi.yaml`](https://gist.githubusercontent.com/diego-aquino/a0554434e8ac73ece2f5d787727b227f/raw/1f584f091df2274239b64e91e23019f5d0b26414/google-maps-places-api-new.openapi.yaml)
    ([Visualizar no Swagger UI](https://editor-next.swagger.io/?url=https://gist.githubusercontent.com/diego-aquino/a0554434e8ac73ece2f5d787727b227f/raw/1f584f091df2274239b64e91e23019f5d0b26414/google-maps-places-api-new.openapi.yaml))

- [Postman](https://web.postman.co/workspace/Google-Maps---Places-API~21e9efb3-9b97-4aff-8d9a-441875ecab88)

### Text Search

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/search-text)

O script [`examples/text-search-current.sh`](./examples/text-search-current.sh)
demonstra uma requisição de exemplo com cURL, salvando a resposta em
[`example-text-search-current.json`](./example-text-search-current.json).

```bash
bash examples/text-search-current.sh
```

### Text Search (New)

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/text-search)
- [Migrando do Text Search](https://developers.google.com/maps/documentation/places/web-service/migrate-text)

O script [`examples/text-search-new.sh`](./examples/text-search-new.sh)
demonstra uma requisição de exemplo com cURL, salvando a resposta em
[`example-text-search-new.json`](./example-text-search-new.json).

```bash
bash examples/text-search-new.sh
```

### Query Autocomplete

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/query)

O script
[`examples/autocomplete-current.sh`](./examples/autocomplete-current.sh)
demonstra uma requisição de exemplo com cURL, salvando a resposta em
[`example-autocomplete-current.json`](./example-autocomplete-current.json).

```bash
bash examples/autocomplete-current.sh
```

### Autocomplete (New)

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/place-autocomplete)
- [Migrando do Query Autocomplete](https://developers.google.com/maps/documentation/places/web-service/migrate-autocomplete)

O script [`examples/autocomplete-new.sh`](./examples/autocomplete-new.sh)
demonstra uma requisição de exemplo com cURL, salvando a resposta em
[`example-autocomplete-new.json`](./example-autocomplete-new.json).

```bash
bash examples/autocomplete-new.sh
```
