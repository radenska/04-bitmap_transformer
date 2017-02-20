'use strict';

const fileReadHelper = require(`${__dirname}/lib/bmp-file-helper.js`);
const bmpCon = require(`${__dirname}/model/bmp-constructor.js`);
const makeBitMap = bmpCon.makeBitMap;


if (!process.argv[2] || !process.argv[3]) {
  console.error('Please enter two parameters: file name and transformation type (grayscale, invert, blue, green, red, yellow, purple)');
  console.log('Format: node index <filename> <transformation type> Example: node index color-palette.bmp invert');
  throw('error');
}
fileReadHelper.getBitMap(makeBitMap);
