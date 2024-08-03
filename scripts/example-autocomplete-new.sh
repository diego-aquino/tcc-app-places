#!/usr/bin/env bash

curl --request POST --silent \
  --url https://places-googleapis-proxy-xkh80emjtn.vercel.app/new/places:autocomplete \
  --header 'content-type: application/json' \
  --data '{
    "input": "pizza em lis",
    "includeQueryPredictions": true,
    "languageCode": "pt-BR"
  }' |
  jq -C | less -R
