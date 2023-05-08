#!/bin/bash

#--------------------------
# parse the arguments
#--------------------------
for ARGUMENT in "$@"
do
   KEY=$(echo $ARGUMENT | cut -f1 -d=)

   KEY_LENGTH=${#KEY}
   VALUE="${ARGUMENT:$KEY_LENGTH+1}"

   export "$KEY"="$VALUE"
done

INPUT_PARENT_DIR="$(dirname ${INPUT_FILE_PATH})"
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > "${INPUT_PARENT_DIR}/.npmrc"

INPUT_PARENT_DIR_NAME="$(basename $INPUT_PARENT_DIR)"
rm -f ${INPUT_PARENT_DIR}/package-lock.json

#--------------------------
# modify the package.json
#--------------------------
export NODE_CODE=$(
cat <<__EOS__
const fs=require('node:fs');

const packagejson=JSON.parse(fs.readFileSync('$INPUT_FILE_PATH').toString());
packagejson.dependencies["@mkgeeklab/googlemaps-core-common"]="${CORE_PLUGIN_VERSION}";
packagejson.dependencies["@mkgeeklab/googlemaps-platform-browser"]="${BROWSER_PLUGIN_VERSION}";
packagejson.dependencies["@mkgeeklab/googlemaps-bridge-capacitor"]="${BRIDGE_PLUGIN_VERSION}";
fs.writeFileSync('$INPUT_FILE_PATH', JSON.stringify(packagejson, null, true));
__EOS__
)
node -e "${NODE_CODE}"

#-------------------
# install & build
#-------------------
CWD=$(pwd)
cd $INPUT_PARENT_DIR
npm i
npm run build
# tree -I node_modules -a

cd $CWD