#!/usr/bin/env bash

baseURL='https://places-googleapis-proxy-xkh80emjtn.vercel.app/new'
outputFile='example-autocomplete-new.json'

command='curl --request POST \
    "$baseURL/places:autocomplete" \
    --header "Content-Type: application/json" \
    --data "{
      \"input\": \"pizza em lis\",
      \"includeQueryPredictions\": true,
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
