#!/bin/bash

PACKAGE_JSON_PATH="$1"
OUT_DIR_PATH="$2"
NPM_ACCESS_TOKEN="$3"

EXAMPLE_DIR="$(dirname $1)"
CWD=$(pwd)
cd $EXAMPLE_DIR
echo "//registry.npmjs.org/:_authToken=${NPM_ACCESS_TOKEN}" > .npmrc

EXAMPLE_DIR_NAME="$(basename $EXAMPLE_DIR)"

echo "----> EXAMPLE_DIR : ${EXAMPLE_DIR}"
echo "----> EXAMPLE_DIR_NAME : ${EXAMPLE_DIR_NAME}"
echo "----> OUT_DIR_PATH : ${OUT_DIR_PATH}"

rm package-lock.json
sed -i 's/"file:.*"/"latest"/g' package.json
npm i
npm run build
# tree -I node_modules -a

cd $CWD
mv "${EXAMPLE_DIR}/dist" "${OUT_DIR_PATH}/${EXAMPLE_DIR_NAME}"