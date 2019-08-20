#!/bin/bash

for i in $(find . -type f -name "*.perp")
do
filename=$(echo $i | cut -d '/' -f 2)
filename_1=$(echo $filename | cut -d '_' -f 1)
filename_2=$(echo $filename | cut -d '_' -f 5)
filename_3=$(echo $filename | cut -d '_' -f 6)
echo $filename,$filename_1,$filename_2,$filename_3,$(cat $i | tail -n 1 | rev | cut -d$'\t' -f 1 | rev) >> stats.csv

done
sort -n stats.csv | tee stats.csv
