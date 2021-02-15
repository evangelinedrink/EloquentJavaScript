//Functions (from the Introduction part of the book)
let total=0;
let count=1;
while (count<=10) {
  total += count;
  count += 1;
}
console.log(total);

function factorial(n) {
  if (n===0) {
    return 1;
  } else {
    return factorial(n-1)*n;
  }
}
console.log(factorial(8));

//CHAPTER 1: VALUES, TYPES AND OPERATORS
//Strings
console.log("This is the first line \n And this is the second line."); // \n creates a new line. \t creates a new tab.
console.log("con"+"cat"+"e"+"nate");
console.log("Half of 100 is ${100/2}");
console.log(`Half of 100 is ${100/2}`); //Backticks (``) are powerful because if you want to calculate and then place the answer in a string (place the equation in ${}), backtick-quoted strings will take the value and add it to the string.  Backtick-quoted strings are called Template literals. To create backticks, hold left Alt and then press 9 and 6 on the number pad (ALT+Numpad9+Numpad6).

//Unary Operators
//typeof operator names the type of value that is written after it.
console.log(typeof 4.5);
console.log(typeof "x");
console.log(-(10-2));

//Boolean Values: True or False (distinguises between two possibilities, like "yes/no" or "on/off")
console.log(3>2);
console.log(3<2);
console.log("Aardvark"<"Zoroaster");
console.log("Itchy" != "Scratchy");
console.log("Apple"=="Orange");
console.log(NaN==NaN);

//Logical Operators
console.log(true&&false); //&& operator is the logical "and". It is true if both values given to it are true.
console.log(true&&true);

console.log(false || true); //|| operator is the logical "or." It shows true if either of the values given to it are true.
console.log(false|| false);

//? : is a ternary operator. This operator is called an conditional operator (or ternary operator since it is the only such operator in Javascript). Value to the left of the quesiton mark picks which of the two values after it will show. When true is left of the question mark, it will select the middle value.  When false is left of the question mark, it will show the value to the right.
console.log(true ? 1:2);
console.log(false ? 1:2);

console.log(null||"user"); // || will show the value to the left if it is true and will show the value to the right if the value to the left is not true. 0, NaN, null and the empty string ("") count as false, while all other values are true.
console.log("Agnes"||"user");

console.log(null&&"user"); // && will show the value to the left if it is false, otherwise it will show the value to the right.
console.log("Agnes"&&"user");