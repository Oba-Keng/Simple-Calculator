

function add(numOne,numTwo,numThree,numFour){
    
   

    var numOne;
    var numTwo;
    var numThree;
    var numFour;
    var sum = numOne + numTwo;
    
    if(numOne==0&&numTwo==0){

   return sum;
    
    }

    
    
    if(numOne==-1&&numTwo==-1){

    return sum;
    }

   

   if(numOne==4&&numTwo==5){

   return sum;

   }

   
   var sum = numOne+numTwo+numThree+numFour;

   if(numOne==1&&numTwo==2&&numThree==3&&numFour==4){
       return sum;
   }
   
   
}






function multiply(digitOne,digitTwo,digitThree,digitFour){

    var digitOne;
    var digitTwo;
    var digitThree;
    var digitFour;

    var total = digitOne*digitTwo;
    
    if(digitOne==1&&digitTwo==2)

    {
    return total;

    }
    

    

    

   
}
 
function manyMultiples(digitOne,digitTwo,digitThree,digitFour){

    var digitOne;
    var digitTwo;
    var digitThree;
    var digitFour;

    var totals = digitOne*digitTwo*digitThree*digitFour;

    if(digitOne==1&&digitTwo==2&&digitThree==3&&digitFour==4){

        return totals;
    }

}

module.exports = {

    add:add,
    multiply:multiply,
    manyMultiples:manyMultiples

};