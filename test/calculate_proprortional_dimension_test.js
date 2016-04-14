const chai = require('chai');
const assert = chai.assert;

const calculator = require('../index');

describe('calculator', function() {
  it('calculates the proportional value when supplied a width and original dimensions', function() {
    var originalDimensions = { width: 400, height: 400 }
    var suppliedValue = { width: 200 }
    var calculatedHeight = calculator(suppliedValue, originalDimensions);
    assert.equal(calculatedHeight, 200);
  })

  it('calculates the proportional value when supplied a height and original dimensions', function() {
    var originalDimensions = { width: 400, height: 800 }
    var suppliedValue = { height: 200 }
    var calculatedWidth = calculator(suppliedValue, originalDimensions);
    assert.equal(calculatedWidth, 100);
  })
})
