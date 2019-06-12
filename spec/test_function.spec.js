const Calculator = require('./calculator.js');


it('should return zero', function(){

    
    var calculator = new Calculator();
    
    
    expect(calculator.add(0,0)).toBe(0)
});

it('should return negative number', function(){

    var calculator = new Calculator();

    expect(calculator.add(-1,-1)).toBe(-2)

});

it('should return sum of two numbers', function(){

    var calculator = new Calculator();

    expect(calculator.add(4,5)).toBe(9)

});

it('can add multiple numbers', function(){

    var calculator = new Calculator();

    expect(calculator.add(1,2,3,4)).toBe(10)

});

it('should return sum of two multiples', function(){

    var calculator = new Calculator();

    expect(calculator.multiply(1,2)).toBe(2)

});

it('should return sum of four multiples', function(){

    var calculator = new Calculator(); 
    
    expect(calculator.multiply(1,2,3,4)).toBe(24)

});










