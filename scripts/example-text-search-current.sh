#!/usr/bin/env bash

curl --request GET --get --silent \
  --url 'https://places-googleapis-proxy-xkh80emjtn.vercel.app/current/textsearch/json' \
  --data-urlencode 'query=restaurantes em Londres' \
  --data-urlencode 'type=restaurant' \
  --data-urlencode 'language=pt-BR' |
  jq -C | less -R
