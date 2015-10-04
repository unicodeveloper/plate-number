'use strict';

var expect = require('chai').expect;
var plateNumber = require('../src/index');

describe('Plate Number', function() {
    it('should generate random number', function() {
        var result = plateNumber.genRandomNumber();
        expect(result).to.equal('1');
    });

    it('should generate two letters', function() {
        var result = plateNumber.genlastTwoLetters();
        expect(result).to.equal('12');
    });

    it('should generate plate number', function() {
        var result = plateNumber.genPlateNumber();
        expect(result).to.equal('123');
    });

    it('should return an object of strings', function() {
        var result = plateNumber.localGovtAreas;
        expect(result).to.be.an('object');
    });

});