'use strict';

const fs = require('fs');
module.exports = exports = {};
const filepath = `${__dirname}/../img/${process.argv[2]}`;
const filepathNewfile = `${filepath.slice(0,filepath.length-4)}-new.bmp`;

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
  });
};
