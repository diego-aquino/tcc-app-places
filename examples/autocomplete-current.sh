#!/usr/bin/env bash

baseURL='https://places-googleapis-proxy-xkh80emjtn.vercel.app/current'
outputFile='example-autocomplete-current.json'

curl --request GET \
  "$baseURL/queryautocomplete/json?input=pizza+em+lis&language=pt-BR" \
  --fail --silent | jq . >"$outputFile"

echo "JSON response saved to ./$outputFile"
