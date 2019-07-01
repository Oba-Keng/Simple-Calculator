const Calculator = require("../calculator.js");

describe("a simple calculator that", function() {
  it("returns zero", function() {
    let calculator = new Calculator();

    expect(calculator.add(0, 0)).toBe(0);
  });

  it("returns the sum of negative numbers", function() {
    let calculator = new Calculator();

    expect(calculator.add(-1, -1)).toBe(-2);
  });

  it("returns sum of two numbers", function() {
    let calculator = new Calculator();

    expect(calculator.add(4, 5)).toBe(9);
  });

  it("adds multiple numbers", function() {
    let calculator = new Calculator();

    expect(calculator.add(1, 2, 3, 4, 10)).toBe(20);
  });

  it("returns sum of two multiples", function() {
    let calculator = new Calculator();

    expect(calculator.multiply(1, 2)).toBe(2);
  });

  it("returns sum of many multiples", function() {
    let calculator = new Calculator();

    expect(calculator.multiply(1, 2, 3, 4, 7)).toBe(168);
  });
});
