#!/usr/bin/env bash

baseURL='https://places-googleapis-proxy-xkh80emjtn.vercel.app/current'
outputFile='example-text-search-current.json'

command='curl --request GET \
  "$baseURL/textsearch/json?query=restaurantes+em+Londres&type=restaurant&language=pt-BR" \
  --fail'

# ---

echo 'Running:'
echo
echo "$ ${command//\$baseURL/$baseURL}" | sed 's/\\"/"/g' | sed "s/\"{/'{/g" | sed "s/}\"/}'/g"

eval "$command --no-progress-meter" | jq . >"$outputFile"

echo
echo "JSON response saved to ./$outputFile"
