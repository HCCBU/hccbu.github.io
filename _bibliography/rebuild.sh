#!/bin/bash

echo "cleaning old allbibs.bib file"
rm allbibs.bib

echo "building new allbibs.bib file"
#cat * > allbibs.bib

find . -type f -name "*.bib" -exec cat {} \;  > allbibs.bib

echo "Bib rebuild finished"
