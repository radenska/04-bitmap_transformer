'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.getBitMap = function(cb) {
 fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data) {
   if (err) throw err;
   cb(data);
 });
};
