#!/usr/bin/env bash

baseURL='https://places-googleapis-proxy-xkh80emjtn.vercel.app/new'
outputFile='example-text-search-new.json'

curl --request POST \
  "$baseURL/places:searchText" \
  --header 'Content-Type: application/json' \
  --header 'X-Goog-Fieldmask: places.displayName,places.formattedAddress,places.location,places.rating' \
  --data '{
    "textQuery": "restaurantes em Lisboa",
    "includedType": "restaurant",
    "languageCode": "pt-BR"
  }' \
  --fail --silent | jq . >"$outputFile"

echo "JSON response saved to ./$outputFile"
