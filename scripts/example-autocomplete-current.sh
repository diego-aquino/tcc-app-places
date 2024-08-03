#!/usr/bin/env bash

curl --request GET --get --silent \
  --url 'https://places-googleapis-proxy-xkh80emjtn.vercel.app/current/queryautocomplete/json' \
  --data-urlencode 'input=pizza em lis' \
  --data-urlencode 'language=pt-BR' |
  jq -C | less -R
