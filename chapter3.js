//Chapter 3: Functions

//Defining a Function
const square= function(x) {
    return x*x; //Return statment leaves the current function and tives the returned value to the code that called the function. Without return, the answer will be undefined.
  };
  console.log(square(12));
  
  const makeNoise= function() {
    console.log("Pling!");
  };
  makeNoise(); //Make sure to call the function
  
  const power= function(base, exponent) {
    let result= 1;
    for(let count=0; count<exponent; count++) {
      result *= base;
    }
    return result;
  };
  console.log(power(2,10));
  
  //Bindings and Scopes
  