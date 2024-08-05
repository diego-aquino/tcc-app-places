# Mocks de API - App de Locais

## Google Maps - Places API

- OpenAPI:
  - Versão atual:
    [`openapi.yaml`](https://raw.githubusercontent.com/googlemaps/openapi-specification/main/dist/google-maps-platform-openapi3.yml)
    ([Visualizar no Swagger UI](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/googlemaps/openapi-specification/main/dist/google-maps-platform-openapi3.yml))
  - Versão nova:
    [`openapi.yaml`](https://gist.githubusercontent.com/diego-aquino/a0554434e8ac73ece2f5d787727b227f/raw/1f584f091df2274239b64e91e23019f5d0b26414/google-maps-places-api-new.openapi.yaml)
    ([Visualizar no Swagger UI](https://editor-next.swagger.io/?url=https://gist.githubusercontent.com/diego-aquino/a0554434e8ac73ece2f5d787727b227f/raw/1f584f091df2274239b64e91e23019f5d0b26414/google-maps-places-api-new.openapi.yaml))

### Text Search

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/search-text)

O script [`examples/text-search-current.sh`](./examples/text-search-current.sh)
faz uma requisição de exemplo e salva a resposta em
[`example-text-search-current.json`](./example-text-search-current.json).

```bash
bash examples/text-search-current.sh
```

### Text Search (New)

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/text-search)
- [Migrando do Text Search](https://developers.google.com/maps/documentation/places/web-service/migrate-text)

O script [`examples/text-search-new.sh`](./examples/text-search-new.sh) faz uma
requisição de exemplo e salva a resposta em
[`example-text-search-new.json`](./example-text-search-new.json).

```bash
bash examples/text-search-new.sh
```

### Query Autocomplete

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/query)

O script
[`examples/autocomplete-current.sh`](./examples/autocomplete-current.sh) faz uma
requisição de exemplo e salva a resposta em
[`example-autocomplete-current.json`](./example-autocomplete-current.json).

```bash
bash examples/autocomplete-current.sh
```

### Autocomplete (New)

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/place-autocomplete)
- [Migrando do Query Autocomplete](https://developers.google.com/maps/documentation/places/web-service/migrate-autocomplete)

O script [`examples/autocomplete-new.sh`](./examples/autocomplete-new.sh) faz
uma requisição de exemplo e salva a resposta em
[`example-autocomplete-new.json`](./example-autocomplete-new.json).

```bash
bash examples/autocomplete-new.sh
```

## Entrega

https://forms.gle/5xsCyTAAFMe3Q1bWA
