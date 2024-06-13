"use strict";

//Question 1
// Declare a variable and assign it a number value
// Check the type of the variable using typeof
// Try assigning Infinity and -Infinity values and check their types
// Declare a variable with a very large integer value (e.g., 9007199254740991)
// Check its type and explain the output

let x = 5;                  //Declare a vairable and assign a value
console.log(typeof x);      //Check the type of variable


let y = Infinity;           //Declare a vaiable and assign a infinity
console.log(typeof y);      //check the type of variable


const z = 9007199254740991;     //Declare a variable and assign a value with bigint
console.log(typeof z);          //check the type of variable 







//Question 2
// Declare a variable and assign it a BigInt value
// Try assigning a regular number and see what happens
// Perform arithmetic operations (addition, subtraction, multiplication) with BigInt values

let bigint = 1234567890;                        //Declare a variable and assign it a BigInt value
let reguNum = 50;                               //Declare a variable and assign it a regular num
let sum = bigint + reguNum;
console.log(sum);                               //sum the bigint , regular num
let sub = bigint - reguNum; 
console.log(sub);                               //sub the bigint , regular num
let multip = bigint * reguNum;
console.log(multip);                            //multiply the bigint , regular num





//Question 3
// Declare variables with single quotes, double quotes, and backticks
// Embed variables and expressions inside backtick strings
// Try concatenating strings using + operator
// Check the type of a string variable

let singleQuotes = 'Single quots';              //Decalre a variable with 'single quots'
let doubleQuotes = "Double Quotes";             //Declare a variable with "single quots"
let backTicks = `Backticks`                     //Declare a variable with `backticks`

let singleQuoStr = 'Faraz';
let doubleQuoStr = "Hassan";
console.log(`embed the Concate single quote and double quote : " ${singleQuoStr} , ${doubleQuoStr}`); 
console.log("concate the : " , singleQuoStr + doubleQuoStr);
        



//Question 4
// Declare variables with boolean values (true and false)
// Use comparison operators (>, <, ===, etc.) to get boolean results
// Combine boolean values using logical operators (&&, ||, !)


let varTrue = true;                                 //Declare a variable with boolean value
let varFalse = false;                               //Declare a variable with boolean value
let num5 = 5;                                       //Declare a variable with value 5
let num4 = 4;                                       //Declare a variable with value4


//comparison operator to get boolean result
//comaprison with greater sign
if (num5 < num4) {
  console.log(`Comparison < to check :"  ${true}`);
} else {
  console.log(`Comparison < to check :"  ${false}`);
}
//comparison with less than sign 
if (4 > 5){
    console.log(`Comparison > to check :"  ${true}`);
}else{
    console.log(`Comparison > to check :"  ${false}`);
}
//comparison with strict equality check
if (5 === 4){
    console.log(`Comparison to strict check :"  ${true}`);
}else{
    console.log(`Comparison to strict check :"  ${false}`);
}
// comaprison with and && operator sign
if (5 == 5 && 3 == 3){
    console.log(`Comparison with && to equality check :"  ${true}`);
}else{
    console.log(`Comparison with && to equality check :"  ${false}`);
}
//comparison with OR || Operator sign 
if (5 == 4 || 2 == 3){
    console.log(`Comparison with OR operator to check equality:"  ${true}`);
}else{
    console.log(`Comparison to check OR|| operator to check equality:"  ${false}`);
}
//comparison with Not! operator sign 
if (5 != 4){
    console.log(`Comparison with not operator to check :"  ${true}`);
}else{
    console.log(`Comparison with not operator to check :"  ${false}`);
}







//Question 5
// Declare a variable without assigning a value and check its type
// Assign null to a variable and check its type
// Try arithmetic operations with null and undefined values

let a;
console.log(typeof a);

let b = null;
console.log(b);

//arithmetic operator with null
console.log(null + 1);
console.log(null - 1);
console.log(null * 1);
console.log(null / 1);

//arithmetic operator with undefined 
console.log(undefined + 1);
console.log(undefined - 1);
console.log(undefined * 1);
console.log(undefined / 1);








//Question 6
// Convert a string to a number using Number() and parseInt()
// Convert a number to a string using String() and concatenation
// Convert a non-boolean value to a boolean using !!
// Explore other type conversion methods (e.g., Boolean(), toString())

let str = "123";
let numb = Number(str);
console.log("string convert into a number : " + numb);


let number = 123;
let string = String(number); 
console.log("number convert into a string : " + string);


let nonBooleanValue = "Hello";
let booleanValue = !!nonBooleanValue;
console.log(booleanValue);




//Question 7
// Use typeof to check the types of various values
// Try typeof on variables, literals, expressions, and functions
// Explain the output when using typeof on null

let value = 2;
console.log(typeof value);


let val = "Hello to EveryOne";
console.log(typeof val);


let value_ = true;
console.log(typeof value_);



let valu = null;
console.log(typeof valu);




// types of Variable 
let c = 5;
var d = 10; 
const e = 15;


//INteger literals 
let age = 39;

// Floating points
let price = 2.15;

//string literals
let greet = "Hello";


//Boolean literals 
let isUserLogin = true;


//Expression arithmetic 
let sumOf = 3+4;

//Logical expression 
let sumOfTwoNum = 3 + 4;
let maximum =  Math.max(a + b)
console.log(sumOfTwoNum);



// function define 
function add(a,b){
    return a + b;
}
console.log(add(2 , 2));

//function expression 
const subtract = function(a, b){
    return a - b;

}
console.log(subtract(2 , 3));


//OUtput using type of null
let value1= null;
if (value1 === null){
    console.log(value1);
}




//Question 8
// Declare variables of different types (string, number, boolean)
// Perform operations involving mixed types (e.g., adding a number and string)
// Observe and explain the results



//string variable 
let name = "faraz";
let greetings  = "Hello nice to meet you";



//number variables
let agee = 6;
let PI = 3.14;


//Boolean variable 
let isUserDefined = true;
let isLoggedIn = false;


//Mixed type conversion 
let nbr = 10;
let strng = "10";
let concat = nbr + strng;
console.log(concat);

