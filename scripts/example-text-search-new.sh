#!/usr/bin/env bash

curl --request POST --silent \
  --url https://places-googleapis-proxy-xkh80emjtn.vercel.app/new/places:searchText \
  --header 'content-type: application/json' \
  --header 'x-goog-fieldmask: places.displayName,places.formattedAddress,places.location,places.rating' \
  --data '{
    "textQuery": "restaurantes em Lisboa",
    "includedType": "restaurant",
    "languageCode": "pt-BR"
  }' |
  jq -C | less -R
