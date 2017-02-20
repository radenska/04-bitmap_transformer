'use strict';

const expect = require('chai').expect;
const fs = require('fs');

var testObj = {};

describe('Constructor Module - Color Transformations', function() {
  describe('Transformed file buffer should match test control - Grey Scale', function() {
    before((done) => {
      fs.readFile(`${__dirname}/../img/butterfly-greyscale.bmp`, 'hex', function(err, data) {
        if (err) throw err;
        let buffer = Buffer.from(data);
        let stringifiedData = buffer.toString('hex');
        testObj.butterflyGreyscale = stringifiedData;
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
    it('outputted test file should match newly transformed bitmap buffer', function(done){
      expect(testObj.butterflyGreyscale).to.equal(testObj.greyScaleControl);
      done();
    });
  });
  describe('Transformed file buffer should match test control - Green Shift', function() {
    before((done) => {
      fs.readFile(`${__dirname}/../img/butterfly-green.bmp`, 'hex', function(err, data) {
        if (err) throw err;
        let buffer = Buffer.from(data);
        let stringifiedData = buffer.toString('hex');
        testObj.butterflyGreen = stringifiedData;
        done();
      });
    });
    before((done) => {
      fs.readFile(`${__dirname}/butterfly-green-test.txt`, 'hex', function(err, data){
        if (err) throw err;
        testObj.greenControl = data;
        done();
      });
    });
    it('outputted test file should match newly transformed bitmap buffer', function(done){
      expect(testObj.butterflyGreen).to.equal(testObj.greenControl);
      done();
    });
  });
  describe('Transformed file buffer should match test control - Red Shift', function() {
    before((done) => {
      fs.readFile(`${__dirname}/../img/butterfly-red.bmp`, 'hex', function(err, data) {
        if (err) throw err;
        let buffer = Buffer.from(data);
        let stringifiedData = buffer.toString('hex');
        testObj.butterflyRed = stringifiedData;
        done();
      });
    });
    before((done) => {
      fs.readFile(`${__dirname}/butterfly-red-test.txt`, 'hex', function(err, data){
        if (err) throw err;
        testObj.redControl = data;
        done();
      });
    });
    it('outputted test file should match newly transformed bitmap buffer', function(done){
      expect(testObj.butterflyRed).to.equal(testObj.redControl);
      done();
    });
  });
  describe('Transformed file buffer should match test control - Blue Shift', function(){
    before((done) => {
      fs.readFile(`${__dirname}/../img/butterfly-blue.bmp`, 'hex', function(err, data) {
        if (err) throw err;
        let buffer = Buffer.from(data);
        let stringifiedData = buffer.toString('hex');
        testObj.butterflyBlue = stringifiedData;
        done();
      });
    });
    before((done) =>{
      fs.readFile(`${__dirname}/butterfly-blue-test.txt`, 'hex', function(err, data) {
        if (err) throw err;
        testObj.blueControl = data;
        done();
      });
    });
    it('outputted test file should match newly transformed bitmap buffer', function(done){
      expect(testObj.butterflyBlue).to.equal(testObj.blueControl);
      done();
    });
  });
  describe('Transformed file buffer should match test control - Purple Shift', function(){
    before((done) => {
      fs.readFile(`${__dirname}/../img/butterfly-purple.bmp`, 'hex', function(err, data) {
        if (err) throw err;
        let buffer = Buffer.from(data);
        let stringifiedData = buffer.toString('hex');
        testObj.butterflyPurple = stringifiedData;
        done();
      });
    });
    before((done) =>{
      fs.readFile(`${__dirname}/butterfly-purple-test.txt`, 'hex', function(err, data) {
        if (err) throw err;
        testObj.purpleControl = data;
        done();
      });
    });
    it('outputted test file should match newly transformed bitmap buffer', function(done){
      expect(testObj.butterflyPurple).to.equal(testObj.purpleControl);
      done();
    });
  });
  describe('Transformed file buffer should match test control - Invert', function(){
    before((done) => {
      fs.readFile(`${__dirname}/../img/butterfly-invert.bmp`, 'hex', function(err, data) {
        if (err) throw err;
        let buffer = Buffer.from(data);
        let stringifiedData = buffer.toString('hex');
        testObj.butterflyInvert = stringifiedData;
        done();
      });
    });
    before((done) =>{
      fs.readFile(`${__dirname}/butterfly-invert-test.txt`, 'hex', function(err, data) {
        if (err) throw err;
        testObj.invertControl = data;
        done();
      });
    });
    it('outputted test file should match newly transformed bitmap buffer', function(done){
      expect(testObj.butterflyInvert).to.equal(testObj.invertControl);
      done();
    });
  });
});
