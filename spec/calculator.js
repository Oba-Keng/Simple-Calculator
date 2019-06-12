module.exports = class Calculator{

constructor(){

    // this.numOne=0;
    // this.numTwo=0;
    // this.numThree;
    // this.numFour;
    // this.sum = 0;


}

add(){

let sum = 0;

for(let i=0;i<arguments.length;i++){

    sum += arguments[i];  

}
return sum;
}

multiply(){

let sum = arguments[0];

for(let i=0;i<arguments.length;i++){
    
    sum *= arguments[i];  
    
 }
    return sum;
}

  
}





// let calculator = new Calculator();
// calculator.add(1,2,3,4,5)