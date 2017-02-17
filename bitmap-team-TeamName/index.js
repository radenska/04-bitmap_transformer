'use strict';

const fileReadHelper = require(`${__dirname}/lib/bmp-file-helper.js`);
const bmpCon = require(`${__dirname}/model/bmp-constructor.js`);
const makeBitMap = bmpCon.makeBitMap;

fileReadHelper.getBitMap(makeBitMap);
