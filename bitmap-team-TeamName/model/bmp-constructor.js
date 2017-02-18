'use strict';

// const colorCon = require(`${__dirname}/color-constructor.js`);
const fileReadHelper = require(`${__dirname}/../lib/bmp-file-helper.js`);
module.exports = exports = {};

//create a place for our constructed bitmap object
// exports.bmObj = {};

//create an object for the transformed buffer to be stored as (on the module)
// exports.transformedBitMap = {};

//create an array for each transformation to store the updated buffer string
// exports.bmObj.transformedArray = [];

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
var bmObj = {};

exports.makeBitMap = function(data) {
  bmObj = new BitMap(data);
  bmObj.prepareArray();
  if (process.argv[3].toLowerCase() === 'blue') bmObj.blue();
  if (process.argv[3].toLowerCase() === 'invert') bmObj.invert();
  if (process.argv[3].toLowerCase() === 'grayscale' || process.argv[3].toLowerCase() === 'greyscale') bmObj.greyscale();
  bmObj.packageArray();
  fileReadHelper.newBitMap(bmObj.buffer);
};

function BitMap(data) {
  this.type = data.toString('utf-8', 0, 2);
  this.totalFileSize = data.readInt32LE(2);
  this.arrayLoc = data.readInt32LE(10);
  this.width = data.readInt32LE(18);
  this.height = data.readInt32LE(22);
  this.numColorPanes = data.readInt32LE(26);
  this.bitsPerPixel = data.readInt32LE(28);
  this.horizRes = data.readInt32LE(38);
  this.verticRes = data.readInt32LE(42);
  this.singlesArray = data.toString('hex', 66, 1090).split('');
  this.buffer = data;
  this.preparedArray = [];
  this.packagedArray = [];
  this.transformedArray = [];
}

BitMap.prototype.prepareArray = function() {
  for (let i = 0; i <= this.singlesArray.length - 2; i += 2) {
    this.preparedArray.push(this.singlesArray[i] + this.singlesArray[i+1]);
  }
};

BitMap.prototype.packageArray = function() {
  for (let i = 0; i <= this.transformedArray.length - 4; i += 4) {
    this.packagedArray.push(this.transformedArray[i] + this.transformedArray[i+1] + this.transformedArray[i+2]);
  }
  var offset = 66;
  for (let i = 0; i < this.packagedArray.length; i++) {
    this.buffer.write(this.packagedArray[i], offset, 'hex');
    offset += 4;
  }
};

BitMap.prototype.invert = function(){
  this.preparedArray.forEach((val, i) => { //invert colors
    this.preparedArray[i] = (255 - parseInt(val, 16)).toString(16);
    if (this.preparedArray[i].length === 1) this.preparedArray[i] = '0' + this.preparedArray[i];
  });
  this.transformedArray = this.preparedArray;
};

BitMap.prototype.greyscale = function() {
  this.preparedArray.forEach((val, i) => { //grayscale colors
    this.preparedArray[i] = Math.ceil((parseInt(val, 16))*0.7);
    if (this.preparedArray[i] > 255) this.preparedArray[i] = 255;
    this.preparedArray[i] = this.preparedArray[i].toString(16);
    if (this.preparedArray[i].length === 1) this.preparedArray[i] = '0' + this.preparedArray[i];
  });
  this.transformedArray = this.preparedArray;
};

BitMap.prototype.blue = function() {
  for (let i = 2; i <= this.preparedArray.length - 4; i += 4) { //change blue values
    this.preparedArray[i] = Math.floor((parseInt(this.preparedArray[i], 16))*1.7);
    if (this.preparedArray[i] > 255) this.preparedArray[i] = 255;
    this.preparedArray[i] = this.preparedArray[i].toString(16);
    if (this.preparedArray[i].length === 1) this.preparedArray[i] = '0' + this.preparedArray[i];
  }
  this.transformedArray = this.preparedArray;
};
