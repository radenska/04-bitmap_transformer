'use strict';

const expect = require('chai').expect;
const fs = require('fs');

var testObj = {};

// console.log(greyscaleTest);

describe('Constructor Module - Color Transformations', function() {
  describe('Transformed file buffer should match test control', function() {
    before((done) => {
      fs.readFile(`${__dirname}/../img/butterfly-greyscale.bmp`, 'hex', function(err, data) {
        if (err) throw err;
        // let stringifiedData = data.toString('hex');
        testObj.butterflyGreyscale = data;
        done();
      });
    });
    before((done) => {
      fs.readFile(`${__dirname}/butterfly-greyscale-test.txt`, 'hex', function(err, data){
        if (err) throw err;
        testObj.greyScaleControl = data;
        done();
      });
    });
    it('outputted test file should match newly transformed bitmap image', function(done){
      expect(testObj.butterflyGreyscale).to.equal(testObj.greyScaleControl);
      done();
    });
  });
});
