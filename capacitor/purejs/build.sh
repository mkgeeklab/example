PACKAGE_JSON_PATH="$1"
OUT_DIR_PATH="$2"

EXAMPLE_DIR="$(dirname $1)"
cd $EXAMPLE_DIR

EXAMPLE_DIR_NAME="$(basename $EXAMPLE_DIR)"

echo "----> EXAMPLE_DIR : ${EXAMPLE_DIR}"
echo "----> EXAMPLE_DIR_NAME : ${EXAMPLE_DIR}"
echo "----> OUT_DIR_PATH : ${OUT_DIR_PATH}"

rm package-lock.json
sed -i 's/"file:.*"/"latest"/g' package.json
npm i
npm build

mv dist "${OUT_DIR_PATH}/${EXAMPLE_DIR_NAME}"
