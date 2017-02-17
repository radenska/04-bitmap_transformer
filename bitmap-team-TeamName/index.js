'use strict';

const fileReadHelper = require(`${__dirname}/lib/bmp-file-helper.js`);
const bmpCon = require(`${__dirname}/model/bmp-constructor.js`);
const colorCon = require(`${__dirname}/model/color-constructor.js`);
const makeBitMap = bmpCon.makeBitMap;
const changeColor = colorCon.changeColor;

fileReadHelper.getBitMap(makeBitMap);
