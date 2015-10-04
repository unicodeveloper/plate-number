'use strict';

var expect = require('chai').expect;
var plateNumber = require('../src/index');

describe('Plate Number', function() {
    it('should generate random number', function() {
        var randomNumber = plateNumber.genRandomNumber(0, 999);
        expect(result).to.include(randomNumber);
    });

    it('should generate two letters', function() {
        var result = plateNumber.genlastTwoLetters();
        expect(result).to.equal('AB');
    });

    it('should return an object of strings', function() {
        var result = plateNumber.plateNumber.localGovtAreas;
        expect(result).to.be.an('object');
    });

});