'use strict';

const fs = require('fs');
module.exports = exports = {};
const filepath = `${__dirname}/../img/${process.argv[2]}`;
const filepathNewfile = `${filepath.slice(0,filepath.length-4)}-new.bmp`;
const testFilePath = `${filepath.slice(0,filepath.length-4)}-test.txt`;

exports.getBitMap = function(cb) {
  fs.readFile(filepath, function(err, data) {
    if (err) throw err;
    cb(data);
  });
};

exports.newBitMap = function(data) {
  fs.writeFile(filepathNewfile, data, function(err) {
    if (err) throw err;
    console.log('your new file can be found here: ', filepathNewfile);
    // makeTestData(testFilePath, data);
  });
};


//::this will write a buffer as a string to a new file for testing purposes::

// var makeTestData = function(testFilePath, data) {
//   var buffer = Buffer.from(data);
//   var testData = buffer.toString('hex');
//   fs.writeFile(testFilePath, testData, function() {
//     console.log('Done writing test file!');
//   });
// };
