'use strict';

const hopeToGod = require('chai').expect;
const fs = require('fs');

describe('bmp-constructor Module', function() {
  describe('Expecting readFile to output buffered data.', function() {
    it('should return buff data', function(done) {
      fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data) {
        hopeToGod(err).to.equal(null);
        hopeToGod(typeof data).to.equal('object');
        done();
    });
  });
});
describe('Expecting asynch callback to hollerback correctly', function() {
});
});
