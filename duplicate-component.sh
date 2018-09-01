#!/bin/sh

target="$1"
cd src/components/
cp TetrisStage/ $target -rf
cd $target
mv TetrisStage.css $target.css
mv TetrisStage.tsx $target.tsx
sed -i 's/TetrisStage/'$target'/g' *