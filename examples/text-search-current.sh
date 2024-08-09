#!/usr/bin/env bash

baseURL='https://places-googleapis-proxy-xkh80emjtn.vercel.app/current'
outputFile='example-text-search-current.json'

curl --request GET \
  "$baseURL/textsearch/json?query=restaurantes+em+Londres&type=restaurant&language=pt-BR" \
  --fail | jq . >"$outputFile"

echo "JSON response saved to ./$outputFile"
