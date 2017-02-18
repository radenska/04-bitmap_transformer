'use strict';

module.exports = exports = {};
const bmpCon = require(`${__dirname}/bmp-constructor.js`);
const fileReadHelper = require(`${__dirname}/../lib/bmp-file-helper.js`);


exports.invert = function(preparedArray){
  preparedArray.forEach((val, i) => { //invert colors
    preparedArray[i] = (255 - parseInt(val, 16)).toString(16);
    if (preparedArray[i].length === 1) preparedArray[i] = '0' + preparedArray[i];
  });
  bmpCon.bmObj.transformedArray = preparedArray;
};

exports.greyscale = function(preparedArray) {
  preparedArray.forEach((val, i) => { //grayscale colors
    preparedArray[i] = Math.ceil((parseInt(val, 16))*0.7);
    if (preparedArray[i] > 255) preparedArray[i] = 255;
    preparedArray[i] = preparedArray[i].toString(16);
    if (preparedArray[i].length === 1) preparedArray[i] = '0' + preparedArray[i];
  });
  bmpCon.bmObj.transformedArray = preparedArray;
};

exports.blue = function(preparedArray) {
  for (let i = 2; i <= preparedArray.length - 4; i += 4) { //change blue values
    preparedArray[i] = Math.floor((parseInt(preparedArray[i], 16))*1.7);
    if (preparedArray[i] > 255) preparedArray[i] = 255;
    preparedArray[i] = preparedArray[i].toString(16);
    if (preparedArray[i].length === 1) preparedArray[i] = '0' + preparedArray[i];
  }
  bmpCon.bmObj.transformedArray = preparedArray;
};

// function packageArray (transformedArray) {
//   var packagedArray = [];
//   for (let i = 0; i <= transformedArray.length - 4; i += 4) {
//     packagedArray.push(transformedArray[i] + transformedArray[i+1] + transformedArray[i+2]);
//   }
//   var offset = 66;
//   for (let i = 0; i < packagedArray.length; i++) {
//     bmpCon.transformedBitMap.write(packagedArray[i], offset, 'hex');
//     offset += 4;
//   }
// }


// fileReadHelper.newBitMap(bmpCon.bmp);




// function convertHexToBin (num) {
//     console.log(parseInt(num, 16).toString(2))
// };
// convertHexToBin('3b568f');

// let bin255 = (255).toString(2); //convert to binary
