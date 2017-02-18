'use strict';

const colorCon = require(`${__dirname}/color-constructor.js`);
const fileReadHelper = require(`${__dirname}/../lib/bmp-file-helper.js`);
module.exports = exports = {};

//create a place for our constructed bitmap object
exports.bmObj = {};

//create an object for the transformed buffer to be stored as (on the module)
exports.transformedBitMap = {};

//create an array for each transformation to store the updated buffer string
exports.bmObj.transformedArray = [];

//Here is the the pseudo-code below that brian wrote for me. He suggested we look at exposing only BitMap constructor to the module from this file.

// function BitmapConstructor(bm) {
//   // house bitmap data
// }
//
// BitmapConstructor.prototype.makeBitmap = function() {
//   // logic here
//   return this;
// }
//
// var Bitmap = module.exports = BitmapConstuctor;
//
// // new file
// var BM = require('./lib/bm-constructor');
//
// var bitmap = new BM();
//
// bitmap.makeBitmap();

exports.makeBitMap = function(data) {
  exports.bmp = data;
  exports.bmObj = new exports.BitMap(data);
  prepareArray(exports.bmObj);
  colorCon.greyscale(exports.bmObj.preparedArray);
  packageArray(exports.bmObj.transformedArray);
  fileReadHelper.newBitMap(exports.transformedBitMap);
  // colorCon.changeColor();
};

function BitMap = function(data) {
  this.type = data.toString('utf-8', 0, 2);
  this.totalFileSize = data.readInt32LE(2);
  this.arrayLoc = data.readInt32LE(10);
  this.width = data.readInt32LE(18);
  this.height = data.readInt32LE(22);
  this.numColorPanes = data.readInt32LE(26);
  this.bitsPerPixel = data.readInt32LE(28);
  this.horizRes = data.readInt32LE(38);
  this.verticRes = data.readInt32LE(42);
  this.colorTable = data.toString('hex', 66, 1090);
};

function prepareArray(bmObj) {
  var colorTableArray = bmObj.colorTable.split(''); //split to modify string of hex chars
  exports.bmObj.preparedArray = [];
  for (let i = 0; i <= colorTableArray.length - 2; i += 2) {
    exports.bmObj.preparedArray.push(colorTableArray[i] + colorTableArray[i+1]);
  }
}

function packageArray(transformedArray) {
  var packagedArray = [];
  for (let i = 0; i <= transformedArray.length - 4; i += 4) {
    packagedArray.push(transformedArray[i] + transformedArray[i+1] + transformedArray[i+2]);
  }
  var offset = 66;
  for (let i = 0; i < packagedArray.length; i++) {
    exports.transformedBitMap.write(packagedArray[i], offset, 'hex');
    offset += 4;
  }
}
