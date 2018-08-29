#!/bin/sh

taget="$1"
cp TetrisStage/ $target -rf
cd $target
mv TetrisStage.css $target.css
mv TetrisStage.tsx $target.tsx
sed -i 's/TetrisStage/'$target'/g' *