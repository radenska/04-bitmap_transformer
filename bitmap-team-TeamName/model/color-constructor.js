// 'use strict';
//
// module.exports = exports = {};
// const bmpCon = require(`${__dirname}/bmp-constructor.js`);
// const fileReadHelper = require(`${__dirname}/../lib/bmp-file-helper.js`);
//
// exports.changeColor = function() { //just inverting colors right now
//   var tableArray = bmpCon.bmObj.allColorTable.split('');
//   //       1. combine all values in pairs
//   var newArray = [];
//   for (let i = 0; i <= tableArray.length - 2; i += 2) {
//     newArray.push(tableArray[i] + tableArray[i+1]);
//   }
//   //        2.turn hex string values to decimal
//   //        4. subtract each RGB value from 255, leave 7th and 8th positions as is;
//   //        5. turn back into hex
//   newArray.forEach((val, i) => { //invert colors
//     newArray[i] = (255 - parseInt(val, 16)).toString(16);
//     if (newArray[i].length === 1) newArray[i] = '0' + newArray[i];
//   });
//   // newArray.forEach((val, i) => { //grayscale colors
//   //   newArray[i] = Math.ceil((parseInt(val, 16))*0.7);
//   //   if (newArray[i] > 255) newArray[i] = 255;
//   //   newArray[i] = newArray[i].toString(16);
//   //   if (newArray[i].length === 1) newArray[i] = '0' + newArray[i];
//   // });
//   for (let i = 2; i <= newArray.length - 4; i += 4) { //change blue values
//     newArray[i] = Math.floor((parseInt(newArray[i], 16))*1.7);
//     if (newArray[i] > 255) newArray[i] = 255;
//     newArray[i] = newArray[i].toString(16);
//     if (newArray[i].length === 1) newArray[i] = '0' + newArray[i];
//   }
//   tableArray = [];
//   for (let i = 0; i <= newArray.length - 4; i += 4) {
//     tableArray.push(newArray[i] + newArray[i+1] + newArray[i+2]);
//   }
//   //        6. combine 3 of the pairs of 4 (to form 6 bytes)
//   var offset = 66;
//   for (let i = 0; i < tableArray.length; i++) {
//     bmpCon.bmp.write(tableArray[i], offset, 'hex');
//     offset += 4;
//   }
  //        8. place in correct location in bitmap buffer
  //        9. call write function, passing it the transformed buffer

// exports.invert = function(preparedArray){
//   preparedArray.forEach((val, i) => { //invert colors
//     preparedArray[i] = (255 - parseInt(val, 16)).toString(16);
//     if (preparedArray[i].length === 1) preparedArray[i] = '0' + preparedArray[i];
//   });
//   bmpCon.bmObj.transformedArray = preparedArray;
// };
//
// exports.greyscale = function(preparedArray) {
//   preparedArray.forEach((val, i) => { //grayscale colors
//     preparedArray[i] = Math.ceil((parseInt(val, 16))*0.7);
//     if (preparedArray[i] > 255) preparedArray[i] = 255;
//     preparedArray[i] = preparedArray[i].toString(16);
//     if (preparedArray[i].length === 1) preparedArray[i] = '0' + preparedArray[i];
//   });
//   bmpCon.bmObj.transformedArray = preparedArray;
// };
//
// exports.blue = function(preparedArray) {
//   for (let i = 2; i <= preparedArray.length - 4; i += 4) { //change blue values
//     preparedArray[i] = Math.floor((parseInt(preparedArray[i], 16))*1.7);
//     if (preparedArray[i] > 255) preparedArray[i] = 255;
//     preparedArray[i] = preparedArray[i].toString(16);
//     if (preparedArray[i].length === 1) preparedArray[i] = '0' + preparedArray[i];
//   }
//   bmpCon.bmObj.transformedArray = preparedArray;
// };

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
