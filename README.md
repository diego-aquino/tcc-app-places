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

<details>
<summary><b>Exemplo de requisição</b> (clique para expandir)</summary>

- Requisição:

  ```bash
  GET https://maps.googleapis.com/maps/api/place/textsearch/json
    ?query=restaurantes em Lisboa
    &type=restaurant
    &language=pt-BR
    &key=API_KEY
  ```

- Resposta:

  ```json
  {
    "status": "OK",
    "html_attributions": [],
    "next_page_token": "AelY_CulUdhNGw1WA6ouLGOk2aPjK3wRCweQsPbmaxkAEnOMjaqqo6GC2dIrGqK2GaomDH4dtLyfz3bHE8X9w0PLtVrSmu-h-CH8XoOnhuGLN0UB0J7eZ1Bwyjsvmrw4CRFUy3XY8CnWez2sBcxSJ2fADzoDFxYpjyPRh4rVZVLRMhEbj_RRdULGQvnjEAQPSLwvjqNNICmQUol-Jk8uDZFo7faVNT8MxBcu165e_9Z4PzTneO9fe6G-JrsZQjTIUBzTTChaDkD7opWNE5f4dRODTmH-ukApQiYC4KmUIJSXC3WPtNqJIroMRTTdU2e7YNkuUbJXawBkTFQZ7pyC416b3kzzM24DTfg3joKqlGFvFg6isLx0A3X6OaWzXb-KU9SnideeaRUMtWJxPwgRjMxaw_nuwpt2OOFIeyGj_gx-7ak",
    "results": [
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Av. da Liberdade 182 184, 1250-146 Lisboa, Portugal",
        "geometry": {
          "location": { "lat": 38.72028, "lng": -9.1449959 },
          "viewport": {
            "northeast": { "lat": 38.7216027, "lng": -9.1436977 },
            "southwest": { "lat": 38.718903, "lng": -9.1463973 }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "JNcQUOI Avenida",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 3710,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/118234748456740950235\"\u003eJNcQUOI\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CuzKGz5wHyMGckodpj9M3K02PoXcj6uUp9nQoLiYpCbzltSA8nw4YJ6-mR57KSxbs5G26-CVCjYSl7zYRhmVYTMoqW6U3nlF4y-_93GxWGAfzEuS8q-dt5x8P3dkYeDEznh1p7DJRcEVzMFVf5HsbpUvFtZ9-bTGzIyu-NGtuXED40O",
            "width": 5618
          }
        ],
        "place_id": "ChIJbeoKfIIzGQ0R9xAksm9Xpo4",
        "plus_code": {
          "compound_code": "PVC4+42 Lisboa, Portugal",
          "global_code": "8CCGPVC4+42"
        },
        "price_level": 4,
        "rating": 4.5,
        "reference": "ChIJbeoKfIIzGQ0R9xAksm9Xpo4",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 2746
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "R. do Olival 258, 1200-744 Lisboa, Portugal",
        "geometry": {
          "location": { "lat": 38.7048482, "lng": -9.1663461 },
          "viewport": {
            "northeast": { "lat": 38.7062198, "lng": -9.1650351 },
            "southwest": { "lat": 38.7035201, "lng": -9.1677348 }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Come Prima",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 2160,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/104076996648097737425\"\u003eRicardo Boteiro\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CuWkytg8zb2W_5RZ0m6lNhrgMCcH9uGcUMib9mLu_4ax16f0N5jxqo-DMwk5CJLRVCmY0cHqHUftYbTMftQqjPR0kM8GDiYdrk9u7yJmrCf0x5zUOIwlfw1zQzS9n2ZW-w57DS4tpCSUrsrpNSjRwYMZHB2LW_gmEI8_vyyaoDdDEWj",
            "width": 3840
          }
        ],
        "place_id": "ChIJmUOQv5g0GQ0RQXio4tGUxDM",
        "plus_code": {
          "compound_code": "PR3M+WF Lisboa, Portugal",
          "global_code": "8CCGPR3M+WF"
        },
        "price_level": 2,
        "rating": 4.8,
        "reference": "ChIJmUOQv5g0GQ0RQXio4tGUxDM",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 6785
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Pavilhão Poente (ao lado do MAAT, Av. Brasília, 1300-598 Lisboa, Portugal",
        "geometry": {
          "location": { "lat": 38.6963541, "lng": -9.1917572 },
          "viewport": {
            "northeast": { "lat": 38.6976634, "lng": -9.1907475 },
            "southwest": { "lat": 38.6949637, "lng": -9.1934472 }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "SUD Lisboa",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 1273,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/111641292883895857498\"\u003eA Google User\u003c/a\u003e"
            ],
            "photo_reference": "AelY_Cs5Zmb8pcKoSe9OECJpnvFtlw1d28MA0UkzIZEHb4witcjIvQG5kCDbe5fMe8znHNaKl2M480FE-3DtbHfG8XztKJYvASQLnYt97_LvmCfc2BdSILvMU_ZJHBm2Dztfltd7nzTAsn5QDFB7mthK-jpylaHNtusykUV1QA2gagPPsJNh",
            "width": 1908
          }
        ],
        "place_id": "ChIJ3Qt2HU3LHg0RErFZs07tcZ0",
        "plus_code": {
          "compound_code": "MRW5+G7 Lisboa, Portugal",
          "global_code": "8CCGMRW5+G7"
        },
        "price_level": 3,
        "rating": 4.5,
        "reference": "ChIJ3Qt2HU3LHg0RErFZs07tcZ0",
        "types": [
          "restaurant",
          "bar",
          "point_of_interest",
          "food",
          "establishment"
        ],
        "user_ratings_total": 9354
      }
    ]
  }
  ```

</details>

### Text Search (New)

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/text-search)
- [Migrando do Text Search](https://developers.google.com/maps/documentation/places/web-service/migrate-text)

<details>
<summary><b>Exemplo de requisição</b> (clique para expandir)</summary>

- Requisição:

  ```bash
  POST https://places.googleapis.com/v1/places:searchText
  Content-Type: application/json
  X-Goog-FieldMask: places.displayName,places.formattedAddress,places.location,places.rating
  X-Goog-Api-Key: API_KEY

  {
    "textQuery" : "restaurantes em Lisboa",
    "includedType": "restaurant",
    "languageCode": "pt-BR"
  }
  ```

- Resposta:

  ```json
  {
    "places": [
      {
        "formattedAddress": "Av. Alm. Reis 1 H, 1150-007 Lisboa, Portugal",
        "location": { "latitude": 38.720257, "longitude": -9.1357429 },
        "rating": 4.4,
        "displayName": {
          "text": "Ramiro",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "R. Francisco Tomás da Costa 28, 1600-093 Lisboa, Portugal",
        "location": { "latitude": 38.7430711, "longitude": -9.1558751 },
        "rating": 4.7,
        "displayName": {
          "text": "Lucimar",
          "languageCode": "pt-PT"
        }
      },
      {
        "formattedAddress": "Av. da Liberdade 182 184, 1250-146 Lisboa, Portugal",
        "location": { "latitude": 38.7202799, "longitude": -9.1449959 },
        "rating": 4.5,
        "displayName": {
          "text": "JNcQUOI Avenida",
          "languageCode": "pt-PT"
        }
      }
    ]
  }
  ```

</details>

### Query Autocomplete

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/query)

<details>
<summary><b>Exemplo de requisição</b> (clique para expandir)</summary>

- Requisição:

  ```bash
  GET https://maps.googleapis.com/maps/api/place/queryautocomplete/json
    ?input=pizza em lis
    &language=pt-BR
    &key=API_KEY
  ```

- Resposta:

  ```json
  {
    "status": "OK",
    "predictions": [
      {
        "description": "pizza em Lisboa, Portugal",
        "matched_substrings": [
          { "length": 5, "offset": 0 },
          { "length": 3, "offset": 9 }
        ],
        "structured_formatting": {
          "main_text": "pizza",
          "main_text_matched_substrings": [{ "length": 5, "offset": 0 }],
          "secondary_text": "em Lisboa, Portugal",
          "secondary_text_matched_substrings": [{ "length": 3, "offset": 3 }]
        },
        "terms": [
          { "offset": 0, "value": "pizza" },
          { "offset": 6, "value": "em" },
          { "offset": 9, "value": "Lisboa" },
          { "offset": 17, "value": "Portugal" }
        ]
      },
      {
        "description": "pizza em Lisle, Illinois, EUA",
        "matched_substrings": [
          { "length": 5, "offset": 0 },
          { "length": 3, "offset": 9 }
        ],
        "structured_formatting": {
          "main_text": "pizza",
          "main_text_matched_substrings": [{ "length": 5, "offset": 0 }],
          "secondary_text": "em Lisle, Illinois, EUA",
          "secondary_text_matched_substrings": [{ "length": 3, "offset": 3 }]
        },
        "terms": [
          { "offset": 0, "value": "pizza" },
          { "offset": 6, "value": "em" },
          { "offset": 9, "value": "Lisle" },
          { "offset": 16, "value": "Illinois" },
          { "offset": 26, "value": "EUA" }
        ]
      },
      {
        "description": "pizza em Lins, SP, Brasil",
        "matched_substrings": [
          { "length": 5, "offset": 0 },
          { "length": 4, "offset": 9 }
        ],
        "structured_formatting": {
          "main_text": "pizza",
          "main_text_matched_substrings": [{ "length": 5, "offset": 0 }],
          "secondary_text": "em Lins, SP, Brasil",
          "secondary_text_matched_substrings": [{ "length": 4, "offset": 3 }]
        },
        "terms": [
          { "offset": 0, "value": "pizza" },
          { "offset": 6, "value": "em" },
          { "offset": 9, "value": "Lins" },
          { "offset": 15, "value": "SP" },
          { "offset": 19, "value": "Brasil" }
        ]
      }
    ]
  }
  ```

</details>

### Autocomplete (New)

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/place-autocomplete)
- [Migrando do Query Autocomplete](https://developers.google.com/maps/documentation/places/web-service/migrate-autocomplete)

<details>
<summary><b>Exemplo de requisição</b> (clique para expandir)</summary>

- Requisição:

  ```bash
  POST https://places.googleapis.com/v1/places:autocomplete
  Content-Type: application/json
  X-Goog-Api-Key: API_KEY

  {
    "input" : "pizza em lis",
    "includeQueryPredictions": true,
    "languageCode": "pt-BR"
  }
  ```

- Resposta:

  ```json
  {
    "suggestions": [
      {
        "queryPrediction": {
          "text": {
            "text": "pizza em Lisboa, Portugal",
            "matches": [
              { "endOffset": 5 },
              { "startOffset": 9, "endOffset": 12 }
            ]
          },
          "structuredFormat": {
            "mainText": {
              "text": "pizza",
              "matches": [{ "endOffset": 5 }]
            },
            "secondaryText": {
              "text": "em Lisboa, Portugal",
              "matches": [{ "startOffset": 3, "endOffset": 6 }]
            }
          }
        }
      },
      {
        "queryPrediction": {
          "text": {
            "text": "pizza em Lisle, Illinois, EUA",
            "matches": [
              { "endOffset": 5 },
              { "startOffset": 9, "endOffset": 12 }
            ]
          },
          "structuredFormat": {
            "mainText": {
              "text": "pizza",
              "matches": [{ "endOffset": 5 }]
            },
            "secondaryText": {
              "text": "em Lisle, Illinois, EUA",
              "matches": [{ "startOffset": 3, "endOffset": 6 }]
            }
          }
        }
      },
      {
        "queryPrediction": {
          "text": {
            "text": "pizza em Lins, SP, Brasil",
            "matches": [
              { "endOffset": 5 },
              { "startOffset": 9, "endOffset": 13 }
            ]
          },
          "structuredFormat": {
            "mainText": {
              "text": "pizza",
              "matches": [{ "endOffset": 5 }]
            },
            "secondaryText": {
              "text": "em Lins, SP, Brasil",
              "matches": [{ "startOffset": 3, "endOffset": 7 }]
            }
          }
        }
      }
    ]
  }
  ```

</details>
