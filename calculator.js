module.exports = class Calculator {
  constructor() {
    this.result = 0;
  }
  //returns the sum of added numbers
  add() {
    for (let i = 0; i < arguments.length; i++) {
      this.result += arguments[i];
    }
    return this.result;
  }
  //returns the sum of multiples
  multiply() {
    this.result = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
      this.result *= arguments[i];
    }
    return this.result;
  }
};
