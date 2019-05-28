var add = require('./calculator.js');
var added = add.add;
var multiply = require('./calculator.js');
var multiples = multiply.multiply;
var manyMultiples = require('./calculator.js');
var moreMultiples = manyMultiples.manyMultiples;

it('should return zero', function(){

    
    
    
    
    expect(added(0,0)).toBe(0)
});

it('should return negative number', function(){

   

    expect(added(-1,-1)).toBe(-2)

});

it('should return sum of two numbers', function(){

    

    expect(added(4,5)).toBe(9)

});

it('can add multiple numbers', function(){

    

    expect(added(1,2,3,4)).toBe(10)

});

it('should return sum of two multiples', function(){

    

    expect(multiples(1,2)).toBe(2)

});

it('should return sum of four multiples', function(){

    
    
    expect(moreMultiples(1,2,3,4)).toBe(24)

});










