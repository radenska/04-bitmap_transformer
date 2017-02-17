'use strict';

module.exports = exports = {};
const colorCon = require(`${__dirname}/color-constructor.js`);


exports.makeBitMap = function(data) {
  exports.bmp = data;
  exports.bmObj = new exports.BitMap(data);
  colorCon.changeColor();
};

exports.BitMap = function(data) {
  this.type = data.toString('utf-8', 0, 2);
  this.totalFileSize = data.readInt32LE(2);
  this.arrayLoc = data.readInt32LE(10);
  this.width = data.readInt32LE(18);
  this.height = data.readInt32LE(22);
  this.numColorPanes = data.readInt32LE(26);
  this.bitsPerPixel = data.readInt32LE(28);
  this.horizRes = data.readInt32LE(38);
  this.verticRes = data.readInt32LE(42);
  // this.colorTableStart = data.readInt32LE(66);
  this.allColorTable = data.toString('hex', 66, 1090);
};
