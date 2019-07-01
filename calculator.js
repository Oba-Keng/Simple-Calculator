module.exports = class Calculator {
  constructor() {
    this.result;
  }
  //returns the sum of added numbers
  add() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  //returns the sum of multiples
  multiply() {
    let result = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }
    return result;
  }
};
