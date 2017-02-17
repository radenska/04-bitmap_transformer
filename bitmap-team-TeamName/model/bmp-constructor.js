'use strict';

const fs = require('fs');
const fileReadHelper = require(`${__dirname}/../lib/bmp-file-helper.js`);
const bmp = fileReadHelper.getBitMap(cb);

console.log('i should be the bmp:', bmp);

function cb(data) {
  console.log('I\'m the callback!', data);
}

// module.exports = exports = {};

//double check that this syntax works with Constructors
function BitMap() {
  this.type = bmp.toString('utf-8', 0, 2);
  this.totalFileSize = bmp.readInt32LE(2);
  this.arrayLoc = bmp.readInt32LE(10);
  this.width = bmp.readInt32LE(18);
  this.height = bmp.readInt32LE(22);
  this.numColorPanes = bmp.readInt32LE(26);
  this.bitsPerPixel = bmp.readInt32LE(28);
  this.horizRes = bmp.readInt32LE(38);
  this.verticRes = bmp.readInt32LE(42);
  // this.colorTableStart = bmp.readInt32LE(66);
  this.allColorTable = bmp.toString('hex', 66, 1090);
};

 function makeBitMap() {
   var bmObj = new BitMap();
   console.log(bmObj);
};
