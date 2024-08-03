# tcc-app-restaurants

## Places API

- OpenAPI:
  - Versão antiga:
    [`openapi.yaml`](https://raw.githubusercontent.com/googlemaps/openapi-specification/main/dist/google-maps-platform-openapi3.yml)
    ([Visualizar no Swagger UI](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/googlemaps/openapi-specification/main/dist/google-maps-platform-openapi3.yml))
  - Versão nova:
    [`openapi.yaml`](https://gist.githubusercontent.com/diego-aquino/a0554434e8ac73ece2f5d787727b227f/raw/1f584f091df2274239b64e91e23019f5d0b26414/google-maps-places-api-new.openapi.yaml)
    ([Visualizar no Swagger UI](https://editor-next.swagger.io/?url=https://gist.githubusercontent.com/diego-aquino/a0554434e8ac73ece2f5d787727b227f/raw/1f584f091df2274239b64e91e23019f5d0b26414/google-maps-places-api-new.openapi.yaml))

### Text Search

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/search-text)

<details open>
<summary>Exemplo:</summary>

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
    "html_attributions": [],
    "next_page_token": "AelY_CulUdhNGw1WA6ouLGOk2aPjK3wRCweQsPbmaxkAEnOMjaqqo6GC2dIrGqK2GaomDH4dtLyfz3bHE8X9w0PLtVrSmu-h-CH8XoOnhuGLN0UB0J7eZ1Bwyjsvmrw4CRFUy3XY8CnWez2sBcxSJ2fADzoDFxYpjyPRh4rVZVLRMhEbj_RRdULGQvnjEAQPSLwvjqNNICmQUol-Jk8uDZFo7faVNT8MxBcu165e_9Z4PzTneO9fe6G-JrsZQjTIUBzTTChaDkD7opWNE5f4dRODTmH-ukApQiYC4KmUIJSXC3WPtNqJIroMRTTdU2e7YNkuUbJXawBkTFQZ7pyC416b3kzzM24DTfg3joKqlGFvFg6isLx0A3X6OaWzXb-KU9SnideeaRUMtWJxPwgRjMxaw_nuwpt2OOFIeyGj_gx-7ak",
    "results": [
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Av. da Liberdade 182 184, 1250-146 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.72028,
            "lng": -9.1449959
          },
          "viewport": {
            "northeast": {
              "lat": 38.72160272989272,
              "lng": -9.14369772010728
            },
            "southwest": {
              "lat": 38.71890307010728,
              "lng": -9.146397379892724
            }
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
          "location": {
            "lat": 38.70484829999999,
            "lng": -9.1663461
          },
          "viewport": {
            "northeast": {
              "lat": 38.70621982989272,
              "lng": -9.165035170107279
            },
            "southwest": {
              "lat": 38.70352017010728,
              "lng": -9.167734829892723
            }
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
          "location": {
            "lat": 38.6963541,
            "lng": -9.191757299999999
          },
          "viewport": {
            "northeast": {
              "lat": 38.69766342989271,
              "lng": -9.190747570107277
            },
            "southwest": {
              "lat": 38.69496377010727,
              "lng": -9.193447229892721
            }
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
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "R. Francisco Tomás da Costa 28, 1600-093 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7430888,
            "lng": -9.1558457
          },
          "viewport": {
            "northeast": {
              "lat": 38.74443767989272,
              "lng": -9.15448342010728
            },
            "southwest": {
              "lat": 38.74173802010728,
              "lng": -9.157183079892723
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Lucimar",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 6120,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/115382641556403316085\"\u003eKerstin Kleppich\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CtiY1ugRkk_UG4zMR6m2wYMlVNuIdqYX1VlBu0dnoIlxHWYb2gRmnP-oUZwXe8NRcCn5AyqK58s6uJAfo-xUwryhYZ9loQWICSVnSMfb5PDdYLSuvVu6UbIVDMhl5NO5UnCMvd6fRZSVK5Onyx54lYIT5GiC8hyxAZOHjy7HSi2inTn",
            "width": 8160
          }
        ],
        "place_id": "ChIJ_-dU9g8zGQ0RZuM8v0sKEt8",
        "plus_code": {
          "compound_code": "PRVV+6J Lisboa, Portugal",
          "global_code": "8CCGPRVV+6J"
        },
        "price_level": 1,
        "rating": 4.7,
        "reference": "ChIJ_-dU9g8zGQ0RZuM8v0sKEt8",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 3450
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Calçada do Monte 86A, 1170-112 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7186296,
            "lng": -9.1317933
          },
          "viewport": {
            "northeast": {
              "lat": 38.71994497989272,
              "lng": -9.130464670107276
            },
            "southwest": {
              "lat": 38.71724532010728,
              "lng": -9.13316432989272
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Estaminé Art Food Drink",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 933,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/118338218433314583053\"\u003eEstaminé - Art Food Drink\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CuFdCux3Kng-MrbIuS0_ufag6leszPF--mZ4aZgeMTPEJdObQYA6a7z3LjdmxZv4sLdOjB-glXJQxA_OxDN9cfWMdgJTQUELh50ngUP-qvyBK5DCa1nWxsaIwwhhyodSTDjcKEW3RUqUMtfZegOoDRBW0DYY2VToikUN1zb6MyM63l6",
            "width": 1660
          }
        ],
        "place_id": "ChIJC4TV14gzGQ0RA16aZsaXYqI",
        "plus_code": {
          "compound_code": "PV99+F7 Lisboa, Portugal",
          "global_code": "8CCGPV99+F7"
        },
        "rating": 4.9,
        "reference": "ChIJC4TV14gzGQ0RA16aZsaXYqI",
        "types": [
          "electronics_store",
          "home_goods_store",
          "restaurant",
          "point_of_interest",
          "store",
          "food",
          "establishment"
        ],
        "user_ratings_total": 412
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Escadinhas das Portas do Mar 4, 1100-410 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7094415,
            "lng": -9.1330448
          },
          "viewport": {
            "northeast": {
              "lat": 38.71073422989272,
              "lng": -9.131708120107279
            },
            "southwest": {
              "lat": 38.70803457010728,
              "lng": -9.134407779892722
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Lisboa Tu e Eu 2",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 2604,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/115387369307597473979\"\u003eA Google User\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CtcMyOeegcwaQ-KilUuf_Ews2Mer26unspiME7-OlrmwHFj7uqjK-bi22-AdtNIqafQeuvDOBnFnDfcCb2bHPAS35c6W7l9BWoUoBDi_l6cGo4qL6dfC232baK9Sdgeyqudd3M-guF_J6A52fd4IR40ZxXpgFPJC6Bx4UdMQStodPU3",
            "width": 4624
          }
        ],
        "place_id": "ChIJfdVbOHc0GQ0Rf-x1kKZ2QAE",
        "plus_code": {
          "compound_code": "PV58+QQ Lisboa, Portugal",
          "global_code": "8CCGPV58+QQ"
        },
        "price_level": 2,
        "rating": 4.7,
        "reference": "ChIJfdVbOHc0GQ0Rf-x1kKZ2QAE",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 3620
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "R. Anchieta 15, 1200-224 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.710197,
            "lng": -9.141076999999999
          },
          "viewport": {
            "northeast": {
              "lat": 38.71149747989272,
              "lng": -9.139802220107278
            },
            "southwest": {
              "lat": 38.70879782010728,
              "lng": -9.142501879892722
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Alma",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 1125,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/113685689581640201989\"\u003eA Google User\u003c/a\u003e"
            ],
            "photo_reference": "AelY_Cuyt8f2S2C6b1tD6-uJHwMK5sSiJaOJDNKCCAAYCFU9ma0IN9fxMq_cV1aIpNXJSkkOh-TLrybQULgYcNA4eeSa0iMz6ajctf3DPs0d2H_7rN0aBmPaCAmONfoJU1HdzMSIgE-lseaGjKCFHSaWrnotc1C_qB-4OioqTQEo6Si1Nd5e",
            "width": 1500
          }
        ],
        "place_id": "ChIJj6yD2340GQ0RM137RrwiBao",
        "plus_code": {
          "compound_code": "PV65+3H Lisboa, Portugal",
          "global_code": "8CCGPV65+3H"
        },
        "price_level": 4,
        "rating": 4.7,
        "reference": "ChIJj6yD2340GQ0RM137RrwiBao",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 1420
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "R. Nova do Carvalho 55, 1200-019 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7072033,
            "lng": -9.143835299999999
          },
          "viewport": {
            "northeast": {
              "lat": 38.70857827989272,
              "lng": -9.142636420107278
            },
            "southwest": {
              "lat": 38.70587862010728,
              "lng": -9.145336079892722
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Restaurante Rio Grande",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 3024,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/108407376045520688155\"\u003ePedro Camelo\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CucHZKHQhvmNMBswq8yfoXO6lMPjwSm6Vp_0F-RdnY3Uu3MoJrCH6W8DbyZQFS_jf1OUMnA4LdrVap7cYSzTbDlv1g6bzL2JOyTPyECEnrky14h-n5uarrQOHdQMFe-pYsmE17FCE2-4lMKo1J6tSovDr9TYL4DXMOCqjsRFl3L6ElL",
            "width": 4032
          }
        ],
        "place_id": "ChIJw3ne3H00GQ0RQLsXrqXi0KQ",
        "plus_code": {
          "compound_code": "PV44+VF Lisboa, Portugal",
          "global_code": "8CCGPV44+VF"
        },
        "price_level": 2,
        "rating": 4.6,
        "reference": "ChIJw3ne3H00GQ0RQLsXrqXi0KQ",
        "types": [
          "bar",
          "restaurant",
          "point_of_interest",
          "food",
          "establishment"
        ],
        "user_ratings_total": 2845
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Rua do Grilo 54, 1900-706 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7322052,
            "lng": -9.1064448
          },
          "viewport": {
            "northeast": {
              "lat": 38.73353337989272,
              "lng": -9.105085870107278
            },
            "southwest": {
              "lat": 38.73083372010728,
              "lng": -9.107785529892721
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "A Casa do Bacalhau",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 1440,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/105925229019177597809\"\u003eRuud van Maaren\u003c/a\u003e"
            ],
            "photo_reference": "AelY_Cvqa_dolcoVjFL0VM-uCX7pmgYBWsX1Ci_RsjHr0AOKtHwgUIw7bPWWOym-rCo7yCbDWvj3doBgOTJgpHxUQkcGCuCQUaOz8Vv5fRH5zkVlR5NagpZvfW1v-I-eaxdrdpLdEiVr7uqYA27_vsZoO8AZ1i90UzmMklgVsQpEhh7tYTK1",
            "width": 2560
          }
        ],
        "place_id": "ChIJGYyl2uUzGQ0RdB3yDvc_L8w",
        "plus_code": {
          "compound_code": "PVJV+VC Lisboa, Portugal",
          "global_code": "8CCGPVJV+VC"
        },
        "price_level": 2,
        "rating": 4.6,
        "reference": "ChIJGYyl2uUzGQ0RdB3yDvc_L8w",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 3315
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Av. da Liberdade 144, 1250-146 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.719472,
            "lng": -9.1441149
          },
          "viewport": {
            "northeast": {
              "lat": 38.72078537989272,
              "lng": -9.142894120107279
            },
            "southwest": {
              "lat": 38.71808572010728,
              "lng": -9.145593779892723
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "JNcQUOI Asia",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 3280,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/100109197397122765423\"\u003eA Google User\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CuMgnZ7FCVo1CDriAdTGE3A4yM6o9slgdrO_qPVs-1N2v4BpriYIiKsfl7VtPmSaFMwF97v-JeVfUWKKlbXwZOnbMhi6QodHOkWxDnfcMmg6R3qgVEWl3Of1sRNEcDlJJSM6ryREKpznJ4O1p05Kb3m0gE6VdJIquyxn91_4B5ymFyS",
            "width": 4928
          }
        ],
        "place_id": "ChIJNcFDccMzGQ0RF7shtMnI4-Y",
        "plus_code": {
          "compound_code": "PV94+Q9 Lisboa, Portugal",
          "global_code": "8CCGPV94+Q9"
        },
        "price_level": 4,
        "rating": 4.5,
        "reference": "ChIJNcFDccMzGQ0RF7shtMnI4-Y",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 2433
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Av. Dom Carlos I 55A, 1200-647 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.708465,
            "lng": -9.153226999999999
          },
          "viewport": {
            "northeast": {
              "lat": 38.70984827989273,
              "lng": -9.151834970107275
            },
            "southwest": {
              "lat": 38.70714862010728,
              "lng": -9.154534629892719
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Frade dos Mares",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 1365,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/109293081318023882989\"\u003eRestaurante Frade Dos Mares\u003c/a\u003e"
            ],
            "photo_reference": "AelY_Cuf-hMbbzkgwelhlvfEckFd43aMuvvm4T7zG9Vv2OAGStjBxSiv8MnFZbfAT_DDEsTju23daK-XUDsSFPsh-zpv2j3srxXtdhS905AtVDBaH5O_yDF1lmBzmmi0UDAOCqndaAwawp5MwnDmZY4K4x1aes6-u6k8l7HN5CeH4zG10n8G",
            "width": 2048
          }
        ],
        "place_id": "ChIJdTVGvYM0GQ0RWjKJ5nUblhg",
        "plus_code": {
          "compound_code": "PR5W+9P Lisboa, Portugal",
          "global_code": "8CCGPR5W+9P"
        },
        "price_level": 2,
        "rating": 4.7,
        "reference": "ChIJdTVGvYM0GQ0RWjKJ5nUblhg",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 2489
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Rua da Prata 52, 1100-150 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7096076,
            "lng": -9.1362697
          },
          "viewport": {
            "northeast": {
              "lat": 38.71093852989272,
              "lng": -9.134971070107277
            },
            "southwest": {
              "lat": 38.70823887010728,
              "lng": -9.13767072989272
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "da Prata 52",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 4480,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/107777969020577985428\"\u003edaprata52\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CurgBA5cPnyqFw03x19RDGdX5hU97ZraeRzrgmt5ws4SSBJN45CFxjYhgzyn471D3MFA5nStirsLBHJbxPdwtF5k11uFPvrQj8eU4VQO-4_Q6v72imCvcrl0XAQyc-70a_XjklXD5C1JIV-8zRyCNjx4gpt8X_jaYwI7RJAr-1rJcyd",
            "width": 6720
          }
        ],
        "place_id": "ChIJ1z55lnk0GQ0RkxInEuF7yEU",
        "plus_code": {
          "compound_code": "PV57+RF Lisboa, Portugal",
          "global_code": "8CCGPV57+RF"
        },
        "price_level": 2,
        "rating": 4.7,
        "reference": "ChIJ1z55lnk0GQ0RkxInEuF7yEU",
        "types": [
          "bar",
          "restaurant",
          "point_of_interest",
          "food",
          "establishment"
        ],
        "user_ratings_total": 2417
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "B. dos Cavaleiros 07 LJ 11, 1100-131 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7166648,
            "lng": -9.134534
          },
          "viewport": {
            "northeast": {
              "lat": 38.71795082989272,
              "lng": -9.133242870107278
            },
            "southwest": {
              "lat": 38.71525117010727,
              "lng": -9.135942529892722
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Restaurant ODAAN (Nepalese & Indian )",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 2738,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/117725333956265307514\"\u003edigiwerks\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CumRbPjkW7dMeqAOFvvexY54cgz-VKWKPBoYTxKpOPlvR2Emij8nCGPeb9KEkzQdtCdadeG8kN61bPVxrKzQZodv7R3s5Lv2HUELPDEC7stauglkEmznsAQcmuG1g6_EX9dk78c0vEB3KgQbCCBz8eyQHo9kmGnAqZPum1sD1csDN86",
            "width": 3400
          }
        ],
        "place_id": "ChIJRVv02FgzGQ0RTqFTFU8_ChA",
        "plus_code": {
          "compound_code": "PV88+M5 Lisboa, Portugal",
          "global_code": "8CCGPV88+M5"
        },
        "price_level": 1,
        "rating": 4.9,
        "reference": "ChIJRVv02FgzGQ0RTqFTFU8_ChA",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 1807
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Av. Elias Garcia 172A, 1050-103 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7386148,
            "lng": -9.151507799999999
          },
          "viewport": {
            "northeast": {
              "lat": 38.73992152989272,
              "lng": -9.150147770107278
            },
            "southwest": {
              "lat": 38.73722187010728,
              "lng": -9.152847429892722
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Casa Nepalesa",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 1205,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/111049268110245096621\"\u003e111049268110245096621\u003c/a\u003e"
            ],
            "photo_reference": "AelY_Cved9C5bEYLowiAq4IxOjIt5_v38JTqv4UDsvzs8zADv3JztRfIu_dgCki1_3QL4TnI-5_8BtXoPbWahzgawhAge-z1mczRoe_hJufAenxGCcg_EhAv_YQxH7OxBY2Trcz5UX59oUalBQ3iQrpDd8bXKcYfoRPw_BzVlVK5jF0fDKub",
            "width": 1600
          }
        ],
        "place_id": "ChIJiy_dqw4zGQ0RmxLFDu-XmmU",
        "plus_code": {
          "compound_code": "PRQX+C9 Lisboa, Portugal",
          "global_code": "8CCGPRQX+C9"
        },
        "price_level": 2,
        "rating": 4.7,
        "reference": "ChIJiy_dqw4zGQ0RmxLFDu-XmmU",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 2867
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "R. de Santa M.nha 26, 1100-491 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7144063,
            "lng": -9.130232299999999
          },
          "viewport": {
            "northeast": {
              "lat": 38.71577162989272,
              "lng": -9.128860920107277
            },
            "southwest": {
              "lat": 38.71307197010728,
              "lng": -9.131560579892723
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Augusto Lisboa",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 2736,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/118254182232065523105\"\u003eJosep Santin\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CvSD_EQLxQ3JaLD7ikcQR5qG3H29r3OWQMixqYKNqjHDb5cXG16ex_31Cr4oBjlAtOdkF7d_4fWDALmeTkuaMegOdQ6ZUJvJaq1PQfOgCvLj3ENQZnXaBeDjmzMWYZsJmrnJU-6jI6xHBl2THGlhq7wkyrmFa0xADZbupi1Lg8gCuH3",
            "width": 3648
          }
        ],
        "place_id": "ChIJtx4y4YkzGQ0RJADhVgp16xc",
        "plus_code": {
          "compound_code": "PV79+QW Lisboa, Portugal",
          "global_code": "8CCGPV79+QW"
        },
        "price_level": 2,
        "rating": 4.8,
        "reference": "ChIJtx4y4YkzGQ0RJADhVgp16xc",
        "types": [
          "cafe",
          "restaurant",
          "point_of_interest",
          "food",
          "establishment"
        ],
        "user_ratings_total": 2656
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "R da Adiça 58, 1100-116 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7109462,
            "lng": -9.130068399999999
          },
          "viewport": {
            "northeast": {
              "lat": 38.71217662989272,
              "lng": -9.128676870107279
            },
            "southwest": {
              "lat": 38.70947697010728,
              "lng": -9.131376529892723
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Lisboa Tu & Eu",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 3024,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/100738452230636200963\"\u003eMauricio Cusine\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CsohQtTVCqlZbDY3p3fUzHmM9SPznkRcwoOq9dfwzcnPjhlOYnAezo-ynCrYb7OL6LaxD-NkAOd0Ef4Z7MnWsRy0a3UjuLY0lF5-VJ2ZPl8RoMJ2xEMYbr1XhujnWF6Jzj8sPyRyBxPeO9KYgAApjYDR4reTKTzywWSgMGRzysO09La",
            "width": 4032
          }
        ],
        "place_id": "ChIJkZDZjXY0GQ0R-4fI-zFNv0I",
        "plus_code": {
          "compound_code": "PV69+9X Lisboa, Portugal",
          "global_code": "8CCGPV69+9X"
        },
        "price_level": 1,
        "rating": 4.5,
        "reference": "ChIJkZDZjXY0GQ0R-4fI-zFNv0I",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 3501
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "R. das Portas de Santo Antão 23, 1150-264 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7153009,
            "lng": -9.1397695
          },
          "viewport": {
            "northeast": {
              "lat": 38.71648662989272,
              "lng": -9.13813947010728
            },
            "southwest": {
              "lat": 38.71378697010728,
              "lng": -9.140839129892724
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Gambrinus",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 674,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/110739608727860528378\"\u003eA Google User\u003c/a\u003e"
            ],
            "photo_reference": "AelY_CuiMgO3z_s_Slz9eQdEdRTB2Ed89JUjWFv-i3No-TH5oK63swpVEqZ1uQnoiFQOXL-sDAsT0gXpAzMxcxiVbZ_ySJvvFN-9cMiihMjVgpG7rnq2q77uyYR3gpi8x5mhew_8VoKzJDR0XCc_v8zTrux2v6Z9hSZbYc-tPVyecGF8nXOw",
            "width": 1011
          }
        ],
        "place_id": "ChIJDWb8MYczGQ0RtGx6lhfvIws",
        "plus_code": {
          "compound_code": "PV86+43 Lisboa, Portugal",
          "global_code": "8CCGPV86+43"
        },
        "price_level": 4,
        "rating": 4.4,
        "reference": "ChIJDWb8MYczGQ0RtGx6lhfvIws",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 1919
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "Av. Sacadura Cabral 53B, 1000-080 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7434239,
            "lng": -9.1442069
          },
          "viewport": {
            "northeast": {
              "lat": 38.74478147989272,
              "lng": -9.142872570107277
            },
            "southwest": {
              "lat": 38.74208182010727,
              "lng": -9.145572229892721
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "O Nobre",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 3000,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/112733372077217562917\"\u003eA Google User\u003c/a\u003e"
            ],
            "photo_reference": "AelY_Csk1rFPlRZCUSdBZMGuT8imuk578HrvKjD14Py3oEqVM95PAFXFTTAUqlp7g_ZLHMWQ0dLCsFMVEgNixhWczo2sq7fDJTiqYKW47NHwG5jE5krPme7f_CoZG3SpcprA0a4I8x-E0jseN-V0VyChSJAHsLq1ioY2vbthLz0OcOV8tXwe",
            "width": 4000
          }
        ],
        "place_id": "ChIJF0mXwqczGQ0RV0kgLT-UL6s",
        "plus_code": {
          "compound_code": "PVV4+98 Lisboa, Portugal",
          "global_code": "8CCGPVV4+98"
        },
        "price_level": 3,
        "rating": 4.5,
        "reference": "ChIJF0mXwqczGQ0RV0kgLT-UL6s",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 1531
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "R. das Gáveas 69, 1200-206 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.71209109999999,
            "lng": -9.1434674
          },
          "viewport": {
            "northeast": {
              "lat": 38.71344097989272,
              "lng": -9.142128420107278
            },
            "southwest": {
              "lat": 38.71074132010727,
              "lng": -9.144828079892722
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Lisboa à Noite",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 1960,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/105979526409792430164\"\u003eOliver Plehwe\u003c/a\u003e"
            ],
            "photo_reference": "AelY_Csmyyn0iL0NmtolodEkQkya6qNPtHYrDDZCOo4596_LX78-W6EarCUCG3JmPU9mwSHCSdiZdMx6BZUkANj1XxNiu3fGkp0y5CsKk4S8iKFU7NcrX-WMmjqPj4hFo1PPRCykW5HRqJawRWrLY5f8pqdvH6amiXkyDBw1wm3nMVYq1Sbj",
            "width": 4032
          }
        ],
        "place_id": "ChIJATwmmn80GQ0RF0s3AuQzVOk",
        "plus_code": {
          "compound_code": "PV64+RJ Lisboa, Portugal",
          "global_code": "8CCGPV64+RJ"
        },
        "price_level": 2,
        "rating": 4.5,
        "reference": "ChIJATwmmn80GQ0RF0s3AuQzVOk",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 1015
      },
      {
        "business_status": "OPERATIONAL",
        "formatted_address": "R. Serpa Pinto 10A, 1200-026 Lisboa, Portugal",
        "geometry": {
          "location": {
            "lat": 38.7100994,
            "lng": -9.1414656
          },
          "viewport": {
            "northeast": {
              "lat": 38.71144442989272,
              "lng": -9.140153420107277
            },
            "southwest": {
              "lat": 38.70874477010727,
              "lng": -9.142853079892721
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Belcanto",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 608,
            "html_attributions": [
              "\u003ca href=\"https://maps.google.com/maps/contrib/111807387388435984557\"\u003eRestaurante Belcanto\u003c/a\u003e"
            ],
            "photo_reference": "AelY_Ct86-y7ABdoe-SYXHI-GRXqKvpeIT-nnyIdgZaiVw6_mzeDm3S7HG9zbPUo1HxHPnm78gs6h_ja-1rBCt7c6AJXua_eKq1iw0tl8KHli-KoQvIYiWCukebgmvvNUqvUIlY4p4hDh9T5mLI7e0Bbrd3pkH_fooWPRWW6wBUf6uHeM2Uo",
            "width": 912
          }
        ],
        "place_id": "ChIJITj75340GQ0RXULVgWMFloA",
        "plus_code": {
          "compound_code": "PV65+2C Lisboa, Portugal",
          "global_code": "8CCGPV65+2C"
        },
        "price_level": 4,
        "rating": 4.6,
        "reference": "ChIJITj75340GQ0RXULVgWMFloA",
        "types": ["restaurant", "point_of_interest", "food", "establishment"],
        "user_ratings_total": 1334
      }
    ],
    "status": "OK"
  }
  ```

</details>

### Text Search (New)

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/text-search)
- [Migrando do Text Search](https://developers.google.com/maps/documentation/places/web-service/migrate-text)

<details open>
<summary>Exemplo:</summary>

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
        "location": {
          "latitude": 38.720257,
          "longitude": -9.1357429
        },
        "rating": 4.4,
        "displayName": {
          "text": "Ramiro",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "R. Francisco Tomás da Costa 28, 1600-093 Lisboa, Portugal",
        "location": {
          "latitude": 38.7430711,
          "longitude": -9.1558751
        },
        "rating": 4.7,
        "displayName": {
          "text": "Lucimar",
          "languageCode": "pt-PT"
        }
      },
      {
        "formattedAddress": "Av. da Liberdade 182 184, 1250-146 Lisboa, Portugal",
        "location": {
          "latitude": 38.720279999999995,
          "longitude": -9.1449959
        },
        "rating": 4.5,
        "displayName": {
          "text": "JNcQUOI Avenida",
          "languageCode": "pt-PT"
        }
      },
      {
        "formattedAddress": "Praça Dom Luís I 7, 1200-148 Lisboa, Portugal",
        "location": {
          "latitude": 38.706877,
          "longitude": -9.1471419999999988
        },
        "rating": 4.6,
        "displayName": {
          "text": "Restaurante Sala de Corte",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "R. Dom Pedro V 18 20, 1250-094 Lisboa, Portugal",
        "location": {
          "latitude": 38.7157129,
          "longitude": -9.145443199999999
        },
        "rating": 4.4,
        "displayName": {
          "text": "La Paparrucha",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "Calçada do Monte 86A, 1170-112 Lisboa, Portugal",
        "location": {
          "latitude": 38.718641,
          "longitude": -9.1317813
        },
        "rating": 4.9,
        "displayName": {
          "text": "Estaminé Art Food Drink",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "Pavilhão Poente (ao lado do MAAT, Av. Brasília, 1300-598 Lisboa, Portugal",
        "location": {
          "latitude": 38.6963541,
          "longitude": -9.191757299999999
        },
        "rating": 4.5,
        "displayName": {
          "text": "SUD Lisboa",
          "languageCode": "pt-PT"
        }
      },
      {
        "formattedAddress": "Rua do Grilo 54, 1900-706 Lisboa, Portugal",
        "location": {
          "latitude": 38.7322066,
          "longitude": -9.106447
        },
        "rating": 4.6,
        "displayName": {
          "text": "A Casa do Bacalhau",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "R. do Olival 258, 1200-744 Lisboa, Portugal",
        "location": {
          "latitude": 38.704848999999996,
          "longitude": -9.166345699999999
        },
        "rating": 4.8,
        "displayName": {
          "text": "Come Prima",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "R. das Portas de Santo Antão 23, 1150-264 Lisboa, Portugal",
        "location": {
          "latitude": 38.7153009,
          "longitude": -9.1397695
        },
        "rating": 4.4,
        "displayName": {
          "text": "Gambrinus",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "Calçada Garcia 31, 1150-169 Lisboa, Portugal",
        "location": {
          "latitude": 38.715387799999995,
          "longitude": -9.138028
        },
        "rating": 4.6,
        "displayName": {
          "text": "Solar 31 da Calçada",
          "languageCode": "pt-PT"
        }
      },
      {
        "formattedAddress": "R. Nova do Carvalho 55, 1200-019 Lisboa, Portugal",
        "location": {
          "latitude": 38.707203299999996,
          "longitude": -9.1438353
        },
        "rating": 4.6,
        "displayName": {
          "text": "Restaurante Rio Grande",
          "languageCode": "en"
        }
      },
      {
        "formattedAddress": "R. Dom Pedro V 129, 1250-096 Lisboa, Portugal",
        "location": {
          "latitude": 38.715970899999995,
          "longitude": -9.1474989
        },
        "rating": 4.4,
        "displayName": {
          "text": "A Cevicheria",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "R da Adiça 58, 1100-116 Lisboa, Portugal",
        "location": {
          "latitude": 38.7109462,
          "longitude": -9.130068399999999
        },
        "rating": 4.5,
        "displayName": {
          "text": "Lisboa Tu & Eu",
          "languageCode": "pt-PT"
        }
      },
      {
        "formattedAddress": "B. dos Cavaleiros 07 LJ 11, 1100-131 Lisboa, Portugal",
        "location": {
          "latitude": 38.716664800000004,
          "longitude": -9.134534
        },
        "rating": 4.9,
        "displayName": {
          "text": "Restaurant ODAAN (Nepalese & Indian )",
          "languageCode": "en"
        }
      },
      {
        "formattedAddress": "Tv. da Boa Hora 27, 1200-063 Lisboa, Portugal",
        "location": {
          "latitude": 38.713803600000006,
          "longitude": -9.1447981
        },
        "rating": 4.4,
        "displayName": {
          "text": "Taberna do Bairro alto",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "Rua do Loreto 21, 1200-241 Lisboa, Portugal",
        "location": {
          "latitude": 38.7106384,
          "longitude": -9.1443596
        },
        "rating": 4.2,
        "displayName": {
          "text": "Sea Me Peixaria Moderna",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "R. da Cintura do Porto de Lisboa Armazém 65, 1200-109 Lisboa, Portugal",
        "location": {
          "latitude": 38.7058622,
          "longitude": -9.1486964
        },
        "rating": 4,
        "displayName": {
          "text": "Monte Mar Lisboa",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "Calçada da Patriarcal 40, 1250-182 Lisboa, Portugal",
        "location": {
          "latitude": 38.7169701,
          "longitude": -9.1483369
        },
        "rating": 4.5,
        "displayName": {
          "text": "Atalho Real",
          "languageCode": "pt"
        }
      },
      {
        "formattedAddress": "Calçada do Forte 22, 1100-256 Lisboa, Portugal",
        "location": {
          "latitude": 38.7136987,
          "longitude": -9.1244447
        },
        "rating": 4.7,
        "displayName": {
          "text": "Taberna Sal Grosso",
          "languageCode": "pt"
        }
      }
    ]
  }
  ```

</details>

### Query Autocomplete

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/query)

<details open>
<summary>Exemplo:</summary>

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
    "predictions": [
      {
        "description": "pizza em Lisboa, Portugal",
        "matched_substrings": [
          {
            "length": 5,
            "offset": 0
          },
          {
            "length": 3,
            "offset": 9
          }
        ],
        "structured_formatting": {
          "main_text": "pizza",
          "main_text_matched_substrings": [
            {
              "length": 5,
              "offset": 0
            }
          ],
          "secondary_text": "em Lisboa, Portugal",
          "secondary_text_matched_substrings": [
            {
              "length": 3,
              "offset": 3
            }
          ]
        },
        "terms": [
          {
            "offset": 0,
            "value": "pizza"
          },
          {
            "offset": 6,
            "value": "em"
          },
          {
            "offset": 9,
            "value": "Lisboa"
          },
          {
            "offset": 17,
            "value": "Portugal"
          }
        ]
      },
      {
        "description": "pizza em Lisle, Illinois, EUA",
        "matched_substrings": [
          {
            "length": 5,
            "offset": 0
          },
          {
            "length": 3,
            "offset": 9
          }
        ],
        "structured_formatting": {
          "main_text": "pizza",
          "main_text_matched_substrings": [
            {
              "length": 5,
              "offset": 0
            }
          ],
          "secondary_text": "em Lisle, Illinois, EUA",
          "secondary_text_matched_substrings": [
            {
              "length": 3,
              "offset": 3
            }
          ]
        },
        "terms": [
          {
            "offset": 0,
            "value": "pizza"
          },
          {
            "offset": 6,
            "value": "em"
          },
          {
            "offset": 9,
            "value": "Lisle"
          },
          {
            "offset": 16,
            "value": "Illinois"
          },
          {
            "offset": 26,
            "value": "EUA"
          }
        ]
      },
      {
        "description": "pizza em Lins, SP, Brasil",
        "matched_substrings": [
          {
            "length": 5,
            "offset": 0
          },
          {
            "length": 4,
            "offset": 9
          }
        ],
        "structured_formatting": {
          "main_text": "pizza",
          "main_text_matched_substrings": [
            {
              "length": 5,
              "offset": 0
            }
          ],
          "secondary_text": "em Lins, SP, Brasil",
          "secondary_text_matched_substrings": [
            {
              "length": 4,
              "offset": 3
            }
          ]
        },
        "terms": [
          {
            "offset": 0,
            "value": "pizza"
          },
          {
            "offset": 6,
            "value": "em"
          },
          {
            "offset": 9,
            "value": "Lins"
          },
          {
            "offset": 15,
            "value": "SP"
          },
          {
            "offset": 19,
            "value": "Brasil"
          }
        ]
      },
      {
        "description": "pizza em Lissone, Província de Monza e Brianza, Itália",
        "matched_substrings": [
          {
            "length": 5,
            "offset": 0
          },
          {
            "length": 3,
            "offset": 9
          }
        ],
        "structured_formatting": {
          "main_text": "pizza",
          "main_text_matched_substrings": [
            {
              "length": 5,
              "offset": 0
            }
          ],
          "secondary_text": "em Lissone, Província de Monza e Brianza, Itália",
          "secondary_text_matched_substrings": [
            {
              "length": 3,
              "offset": 3
            }
          ]
        },
        "terms": [
          {
            "offset": 0,
            "value": "pizza"
          },
          {
            "offset": 6,
            "value": "em"
          },
          {
            "offset": 9,
            "value": "Lissone"
          },
          {
            "offset": 18,
            "value": "Província de Monza e Brianza"
          },
          {
            "offset": 48,
            "value": "Itália"
          }
        ]
      },
      {
        "description": "pizza em Lisbon Airport (LIS), Alameda das Comunidades Portuguesas, Lisboa, Portugal",
        "matched_substrings": [
          {
            "length": 5,
            "offset": 0
          },
          {
            "length": 3,
            "offset": 9
          }
        ],
        "structured_formatting": {
          "main_text": "pizza",
          "main_text_matched_substrings": [
            {
              "length": 5,
              "offset": 0
            }
          ],
          "secondary_text": "em Lisbon Airport (LIS), Alameda das Comunidades Portuguesas, Lisboa, Portugal",
          "secondary_text_matched_substrings": [
            {
              "length": 3,
              "offset": 3
            }
          ]
        },
        "terms": [
          {
            "offset": 0,
            "value": "pizza"
          },
          {
            "offset": 6,
            "value": "em"
          },
          {
            "offset": 9,
            "value": "Lisbon Airport (LIS)"
          },
          {
            "offset": 31,
            "value": "Alameda das Comunidades Portuguesas"
          },
          {
            "offset": 68,
            "value": "Lisboa"
          },
          {
            "offset": 76,
            "value": "Portugal"
          }
        ]
      }
    ],
    "status": "OK"
  }
  ```

</details>

### Autocomplete (New)

- [Documentação](https://developers.google.com/maps/documentation/places/web-service/place-autocomplete)
- [Migrando do Query Autocomplete](https://developers.google.com/maps/documentation/places/web-service/migrate-autocomplete)

<details open>
<summary>Exemplo:</summary>

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
              {
                "endOffset": 5
              },
              {
                "startOffset": 9,
                "endOffset": 12
              }
            ]
          },
          "structuredFormat": {
            "mainText": {
              "text": "pizza",
              "matches": [
                {
                  "endOffset": 5
                }
              ]
            },
            "secondaryText": {
              "text": "em Lisboa, Portugal",
              "matches": [
                {
                  "startOffset": 3,
                  "endOffset": 6
                }
              ]
            }
          }
        }
      },
      {
        "queryPrediction": {
          "text": {
            "text": "pizza em Lisle, Illinois, EUA",
            "matches": [
              {
                "endOffset": 5
              },
              {
                "startOffset": 9,
                "endOffset": 12
              }
            ]
          },
          "structuredFormat": {
            "mainText": {
              "text": "pizza",
              "matches": [
                {
                  "endOffset": 5
                }
              ]
            },
            "secondaryText": {
              "text": "em Lisle, Illinois, EUA",
              "matches": [
                {
                  "startOffset": 3,
                  "endOffset": 6
                }
              ]
            }
          }
        }
      },
      {
        "queryPrediction": {
          "text": {
            "text": "pizza em Lins, SP, Brasil",
            "matches": [
              {
                "endOffset": 5
              },
              {
                "startOffset": 9,
                "endOffset": 13
              }
            ]
          },
          "structuredFormat": {
            "mainText": {
              "text": "pizza",
              "matches": [
                {
                  "endOffset": 5
                }
              ]
            },
            "secondaryText": {
              "text": "em Lins, SP, Brasil",
              "matches": [
                {
                  "startOffset": 3,
                  "endOffset": 7
                }
              ]
            }
          }
        }
      },
      {
        "queryPrediction": {
          "text": {
            "text": "pizza em Lissone, Província de Monza e Brianza, Itália",
            "matches": [
              {
                "endOffset": 5
              },
              {
                "startOffset": 9,
                "endOffset": 12
              }
            ]
          },
          "structuredFormat": {
            "mainText": {
              "text": "pizza",
              "matches": [
                {
                  "endOffset": 5
                }
              ]
            },
            "secondaryText": {
              "text": "em Lissone, Província de Monza e Brianza, Itália",
              "matches": [
                {
                  "startOffset": 3,
                  "endOffset": 6
                }
              ]
            }
          }
        }
      },
      {
        "queryPrediction": {
          "text": {
            "text": "pizza em Lisbon Airport (LIS), Alameda das Comunidades Portuguesas, Lisboa, Portugal",
            "matches": [
              {
                "endOffset": 5
              },
              {
                "startOffset": 9,
                "endOffset": 12
              }
            ]
          },
          "structuredFormat": {
            "mainText": {
              "text": "pizza",
              "matches": [
                {
                  "endOffset": 5
                }
              ]
            },
            "secondaryText": {
              "text": "em Lisbon Airport (LIS), Alameda das Comunidades Portuguesas, Lisboa, Portugal",
              "matches": [
                {
                  "startOffset": 3,
                  "endOffset": 6
                }
              ]
            }
          }
        }
      }
    ]
  }
  ```

</details>
