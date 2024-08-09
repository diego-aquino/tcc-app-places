#!/usr/bin/env bash

baseURL='https://places-googleapis-proxy-xkh80emjtn.vercel.app/new'
outputFile='example-autocomplete-new.json'

curl --request POST \
  "$baseURL/places:autocomplete" \
  --header 'Content-Type: application/json' \
  --data '{
    "input": "pizza em lis",
    "includeQueryPredictions": true,
    "languageCode": "pt-BR"
  }' \
  --fail | jq . >"$outputFile"

echo "JSON response saved to ./$outputFile"
