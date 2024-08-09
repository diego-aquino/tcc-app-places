#!/usr/bin/env bash

baseURL='https://places-googleapis-proxy-xkh80emjtn.vercel.app/current'
outputFile='example-autocomplete-current.json'

command='curl --request GET \
  "$baseURL/queryautocomplete/json?input=pizza+em+lis&language=pt-BR" \
  --fail'

# ---

echo 'Running:'
echo
echo "$ ${command//\$baseURL/$baseURL}" | sed 's/\\"/"/g' | sed "s/\"{/'{/g" | sed "s/}\"/}'/g"

eval "$command --no-progress-meter" | jq . >"$outputFile"

echo
echo "JSON response saved to ./$outputFile"
