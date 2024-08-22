#!/usr/bin/env bash

baseURL='https://places-googleapis-proxy-xkh80emjtn.vercel.app/new'
outputFile='example-text-search-new.json'

command='curl --request POST \
  "$baseURL/places:searchText" \
  --header "Content-Type: application/json" \
  --header "X-Goog-Fieldmask: places.id,places.displayName,places.formattedAddress,places.location,places.rating" \
  --data "{
    \"textQuery\": \"restaurantes em Lisboa\",
    \"includedType\": \"restaurant\",
    \"languageCode\": \"pt-BR\"
  }" \
  --fail'

# ---

echo 'Running:'
echo
echo "$ ${command//\$baseURL/$baseURL}" | sed 's/\\"/"/g' | sed "s/\"{/'{/g" | sed "s/}\"/}'/g"

eval "$command --no-progress-meter" | jq . >"$outputFile"

echo
echo "JSON response saved to ./$outputFile"
