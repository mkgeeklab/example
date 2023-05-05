#!/bin/bash

TARGET_PATH=$1
OUTPUT_FILE="${TARGET_PATH}/index.html"

LIST=$(find ${TARGET_PATH} -name "index.html")

printHeader() {

cat <<- __EOS__ > $OUTPUT_FILE
<!DOCTYPE html>
<html>
    <body>
        <ul>
__EOS__

}

printRow() {
    local link=$1
    echo "<li><a href='${link}'>${link}</a></li>" >> $OUTPUT_FILE
}

printHeader

for indexPath in $LIST
do
    printRow ${indexPath}
done


cat <<- __EOS__ >> ${OUTPUT_FILE}
        </ul>
    </body>
</html>
__EOS__


cat ${OUTPUT_FILE}