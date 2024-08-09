#!/usr/bin/env bash

set -e

# git checkout main-v1
# git rebase main
# git push --force

# git checkout main-v2
# git rebase main-v1
# git push --force

git checkout main

for directory in ../api-mocking-app-restaurants ../api-mocking-app-autocomplete; do
  (
    cd "$directory"

    rsync ../tcc-app-places/ . \
      --archive \
      --verbose \
      --delete \
      --exclude .git \
      --exclude node_modules \
      --exclude scripts
  )
done
