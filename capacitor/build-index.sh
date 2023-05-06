#!/bin/bash

TARGET_PATH=$1
OUTPUT_FILE="${TARGET_PATH}/index.html"

printHeader() {

cat <<- __EOS__ > $OUTPUT_FILE
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4/css/metro-all.min.css">
    </head>
    <body>
        <ul class="items-list">
__EOS__

}

printRow() {
    local proj_name=$1
    local title=$2
    local description=$3
    local link=$4
    echo "<li>"  >> $OUTPUT_FILE
    echo "<div class='link label'><a href='${link}'>${title}</a></div>" >> $OUTPUT_FILE
    echo "<div class='description second-label'>${description}</div>" >> $OUTPUT_FILE
    echo "</li>"  >> $OUTPUT_FILE
}

mkdir dist
printHeader

for build_dir_path in $(find $TARGET_PATH -type d -name node_modules -prune -false -o -type d -name "build")
do
    proj_dir=$(dirname $build_dir_path)
    proj_name=$(basename $proj_dir)
    title=$(grep "<title>" "${build_dir_path}/index.html" | sed -E 's/.*<title>(.*?)<\/title>/\1/')
    description=$(grep 'name="description"' "${build_dir_path}/index.html" | sed -E 's/.*content="(.+?)".*>/\1/')

    mv $build_dir_path ./dist/${proj_name}
    printRow $proj_name "${title}" "${description}" "./${proj_name}/index.html"
done


cat <<- __EOS__ >> ${OUTPUT_FILE}
        </ul>
    </body>
</html>
__EOS__

