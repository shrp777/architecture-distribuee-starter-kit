#!/bin/bash

MONGO_IMPORT_DATA_FILE=/tmp/import/data.json

if [ -f "$MONGO_IMPORT_DATA_FILE" ]; then
    echo "Importing JSON data from $MONGO_IMPORT_DATA_FILE to $MONGO_INITDB_DATABASE.$MONGO_INITDB_COLLECTION"
    mongoimport --db "$MONGO_INITDB_DATABASE" --collection "$MONGO_INITDB_COLLECTION" --type json --file "$MONGO_IMPORT_DATA_FILE" --jsonArray
    echo "Successfuly imported JSON data!"
else
    echo "JSON file $MONGO_IMPORT_DATA_FILE not found. Skipping import."
fi