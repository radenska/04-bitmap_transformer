'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const fileReadHelper = require(`${__dirname}/../lib/bmp-file-helper.js`);

describe('Bit Map Reader', function() {
  describe('Expecting readFile to output a buffer.', function() {
    it('should be a pseudo-object ', function(done) {
       fileReadHelper.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data) {
         expect(err).to.equal(null);
         expect(typeof data).to.equal('object');
         done();
       });
    });
  });
  describe('')
});
