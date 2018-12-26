#!/bin/bash -e

CUR_DIR=$(pwd)
cd $1
for file in Users/max_p/Desktop/RotateImage/*.jpeg
do
    convert $file -rotate 90 $file
done
cd $CUR_DIR