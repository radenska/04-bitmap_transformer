'use strict';

const fileReadHelper = require(`${__dirname}/../lib/bmp-file-helper.js`);
module.exports = exports = {};

var bmObj = {};

exports.makeBitMap = function(data) {
  bmObj = new BitMap(data);
  bmObj.prepareArray();
  selectTransformation();
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
  this.singles = data.toString('hex', 66, 1090).split('');
  this.buffer = data;
  this.pairs = [];
  this.packaged = [];
  this.transformed = [];
}

BitMap.prototype.prepareArray = function() {
  for (let i = 0; i <= this.singles.length - 2; i += 2) {
    this.pairs.push(this.singles[i] + this.singles[i+1]);
  }
};

BitMap.prototype.packageArray = function() {
  for (let i = 0; i <= this.transformed.length - 4; i += 4) {
    this.packaged.push(this.transformed[i] + this.transformed[i+1] + this.transformed[i+2]);
  }
  var offset = 66;
  for (let i = 0; i < this.packaged.length; i++) {
    this.buffer.write(this.packaged[i], offset, 'hex');
    offset += 4;
  }
};

BitMap.prototype.invert = function(){
  this.transformed = this.pairs.map(val => { //invert colors
    val = (255 - parseInt(val, 16)).toString(16);
    if (val.length === 1) val = '0' + val;
    return val;
  });
};

BitMap.prototype.greyscale = function() {
  //a grayscale formula: 0.2989*red + 0.5870*green + 0.1140*blue, then each value (R, G, and B) is assigned the weighted average
  var grayArray = this.pairs.map(val => parseInt(val, 16));
  for (let i = 0; i < grayArray.length - 4; i += 4) {
    let sumRGB = Math.floor(grayArray[i]*0.114 + grayArray[i+1]*0.587 + grayArray[i+2]*0.2989); //calculate weighted average
    grayArray[i] = grayArray[i+1] = grayArray[i+2] = sumRGB; //each value equals the sum
  }
  this.transformed = grayArray.map(val => { //turn into string and assign to transformed
    val = val.toString(16);
    if (val.length === 1) val = '0' + val;
    return val;
  });
};

BitMap.prototype.colorify = function(colorIndex, i2, i3) {
  this.transformColor(colorIndex, 0.7);
  this.transformColor(i2, 0); //set non chosen values to 0
  this.transformColor(i3, 0);
  this.transformed = this.pairs;
};

BitMap.prototype.transformColor = function(start, colorVal) {
  // position 0: blue 1: green 2: red 3: padding
  for (let i = start; i <= this.pairs.length - 4; i += 4) { //change blue values
    this.pairs[i] = Math.floor((parseInt(this.pairs[i], 16))*colorVal);
    if (this.pairs[i] > 255) this.pairs[i] = 255;
    this.pairs[i] = this.pairs[i].toString(16);
    if (this.pairs[i].length === 1) this.pairs[i] = '0' + this.pairs[i];
  }
};

function selectTransformation() {
  let userChoice = process.argv[3].toLowerCase();
  if (userChoice === 'blue') bmObj.colorify(0, 1, 2);
  if (userChoice === 'red') bmObj.colorify(2, 0, 1);
  if (userChoice === 'green') bmObj.colorify(1, 0, 2);
  if (userChoice === 'invert') bmObj.invert();
  if (userChoice === 'purple') {
    bmObj.colorify(0, 1, 1);
    bmObj.colorify(2, 1, 1);
  }
  if (userChoice === 'yellow') {
    bmObj.colorify(1, 0, 0);
    bmObj.colorify(2, 0, 0);
  }
  if (userChoice === 'grayscale' || userChoice === 'greyscale') bmObj.greyscale();
}
