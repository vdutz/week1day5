var assert = require("chai").assert;
var isValid = require("../module.js").isValid;

describe("Luhn Numbers", function() {
  it("should return true if a card number is a luhn number", function() {
    var number = 79927398713;
    assert.isTrue(isValid(number));
  });

  it("should return false is a card number is NOT a luhn number", function() {
    var number = 12345678910;
    assert.isFalse(isValid(number));
  });
});