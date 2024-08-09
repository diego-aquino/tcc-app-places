# Busca de Restaurantes - Aplicando Mocks de API

Esta aplicação permite buscar restaurantes bem avaliados no mundo, usando a
[Places API do Google Maps](https://developers.google.com/maps/documentation/places/web-service).

## 1. Acesso

[![Abrir no Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/diego-aquino/api-mocking-app-restaurants?startScript=dev&file=README.md)

## 2. Projeto

Arquivos importantes:

- [`src/server/app.ts`](./src/server/app.ts): arquivo principal da aplicação,
  onde o servidor está implementado.
- [`src/clients/GoogleMapsPlacesClient.ts`](./src/clients/googleMaps/GoogleMapsPlacesClient.ts):
  classe que faz as chamadas HTTP para a Places API.
- [`tests/restaurants.test.ts`](./tests/restaurants.test.ts): arquivo para os
  testes da busca de restaurantes.

Comandos úteis:

- `npm install`: instala as **dependências** do projeto.
- `npm run dev`: inicia o **servidor** em modo de desenvolvimento.
- `npm run test`: executa os **testes** da aplicação em modo watch.
- `npm run types:check`: verifica se há **erros de tipo** no código.

## 3. Places API do Google Maps

- Documentação OpenAPI:
  - Versão atual:
    [`openapi.yaml`](https://raw.githubusercontent.com/googlemaps/openapi-specification/main/dist/google-maps-platform-openapi3.yml)
    ([Visualizar no Swagger UI](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/googlemaps/openapi-specification/main/dist/google-maps-platform-openapi3.yml))
  - Versão nova:
    [`openapi.yaml`](https://gist.githubusercontent.com/diego-aquino/a0554434e8ac73ece2f5d787727b227f/raw/1f584f091df2274239b64e91e23019f5d0b26414/google-maps-places-api-new.openapi.yaml)
    ([Visualizar no Swagger UI](https://editor-next.swagger.io/?url=https://gist.githubusercontent.com/diego-aquino/a0554434e8ac73ece2f5d787727b227f/raw/1f584f091df2274239b64e91e23019f5d0b26414/google-maps-places-api-new.openapi.yaml))

### 3.1. Text Search

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/search-text)

Exemplo de requisição com `curl`:

```bash
bash examples/text-search-current.sh
```

### 3.2. Text Search (New)

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/text-search)
- [Guia de migração](https://developers.google.com/maps/documentation/places/web-service/migrate-text)

Exemplo de requisição com `curl`:

```bash
bash examples/text-search-new.sh
```
