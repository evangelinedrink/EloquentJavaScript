//Expressions and Statements
1;
!false;
console.log(1);
console.log(!false);

//Bindings (Binding or variables catch and hold values given to them)
let caught =5*5;
console.log(caught);

let ten=10; //Once a variable has been stated, the variable can be used.
console.log(ten*ten);

//Variables don't necessarily keep their values. Their values can change (if let and var was used to initialize the variable). If const was used to initialize the variable, then the value for that variable is held constant.
let mood="light";
console.log(mood);
mood="dark";
console.log(mood);

let luigisDebt=140;
luigisDebt -= 35;
console.log(luigisDebt);

let one=1, two=2;
console.log(one+two);

var name="Ayla";
const greeting="Hello "; //greeting variable will not have its value changed anymore because we used const.
console.log(greeting + name);

//Functions, Console.log function, and return values
//Executing a function is called calling, invoking or applying the function. Make sure to place parenthesis after the function to call it.
//Arguments= Values given to functions.

let x=30;
console.log("The value of x is"+ " " + x + ".");

console.log(Math.max(2,4));

//When a function produces a value, it returns this value. Functions can be nested inside other functions because they produce a value (which makes a function an expression).
console.log(Math.min(2,4)+100);

//Control Flow (statements are executed from top to bottom)
let theNumber= Number(prompt("Pick a number")); //Number() function changes the type (which in this case is probaby a string) into a number type. Prompt() function shows a prompt box that displays to the user.
console.log("Your number is the square root of " + theNumber*theNumber + ".");

//Conditional Execution
let theNumber2= Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber2)) { //.isNan() function determines if the value inside the parenthesis is not a number or not. Number.isNaN() function returns true if the argument (thing inside of the parenthesis) is not a number (NaN).
  console.log("Your number is the square root of " + theNumber2*theNumber2 + ".");
}

let theNumber2= Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber2)) { //.isNan() function determines if the value inside the parenthesis is not a number or not. Number.isNaN() function returns true if the argument (thing inside of the parenthesis) is not a number (NaN).
  console.log("Your number is the square root of " + theNumber2*theNumber2 + ".");
} else {
console.log("Please enter a number.");
}

let num= Number(prompt("Pick a number."));
if (num<10) {
  console.log("Small");
} else if (num <100) {
  console.log("Medium");
} else {
  console.log("Large");
}

//While and Do Loops
let number =0;
while (number <= 12) { //while statement starts a loop
  console.log(number);
  number =number +2;
}

let result=1;
let counter =0;
while (counter<10) {
  //result= result*2;
  result *= 2;
  //counter= counter +1;
  counter += 1;
}
console.log("The result is " + result + " and to get this answer the while functioned occured " + counter + " times.")

//Do loops execute its body at least once before verifying the while loop.
let yourName; //creates an empty variable 
do {
  yourName=prompt("Who are you?");
} while (!yourName); //This will force the user to enter something into the prompt: "Who are you?" because it will run the prompt function until it gets an answer. Applying the ! operator will convert the value to a Boolean type before negating it. This means that all strings except empty strings "" will convert to true.
console.log(yourName);

//Indenting Code
if (false !=true) {
    console.log("This is correct.");
    if (1<2){
      console.log("No surprise here.");
    }
  }

//For Loops
//let number1= 0;
for (let number1=0; number1<=12; number1+=2) { //displaying even numbers
  console.log(number1);
}

let result2=1;
for (let counter=0; counter<10; counter +=1) {
  result2*=2;
}
console.log(result2);

//Breaking out of a loop
//Having a loop condition produce false or using the break statement will break out of a loop
for (let current =20; ; current += 1) {
  if(current % 7===0) { //makes sure that the variable current is divisible by 7 (remainder is equal to zero)
    console.log(current);
    break; //break will stop the loop from operating
  }
}

for (let number3=0; number3 <=12; number3+=2) {
  console.log(number3);
}

//Dispatching on a value with Switch