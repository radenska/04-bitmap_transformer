'use strict';

const hopeToGod = require('chai').expect;
const fs = require('fs');
const bmp = require(`${__dirname}/../model/bmp-constructor.js`);

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
describe('bmp-constructor Module', function() {
  describe('Expecting to confirm object has property of colorPanes.', function(){
    it('should confirm the property\'s presense', function(done){
    var bmObj = {};
    hopeToGod(bmp.makeBitMap).is.a('function');
    done();
  });
});
});
});
