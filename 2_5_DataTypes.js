"use strict";

console.log(-1);

let str = "";
console.log(Boolean("")); //without spaces boolean false

let string= " ";
console.log(Boolean(" ")); //its a boolean function spaces empty string "true" 

let strNum = "0";
console.log(Number("0"));   //non-empty string in boolean its return true 

let stringNum = "0";
console.log(Boolean(Number("0")));

//its called backticks expression 

let name = "Ilya";

 console.log( `hello ${1}` ); // in backticks inside is number

 console.log( `hello ${"name"}` ); // in backticks inside in name

 console.log( `hello ${name}` ); // in backticks inside name expression with name 

 //The number type represents both integer and floating point numbers.

 let number = 246;
 number = 2.468;
 console.log(number);

 //string back ticks used to embed variables

let studentName = "Rahim";

console.log( `Hello, ${studentName}!` ); 

console.log( `the result is ${1 + 2}` ); 

//Boolean values also come as a result of comparisons:
//In comparison between two numbes 4 , 1 result in boolean true becaue condition is 4 > 1
let isGreater = 4 > 1;
console.log( isGreater ); //in this return is boolean true or false

//BigInt 
const bigInt = (1234567890);
console.log(bigInt);

//Any further mathematical operation on NaN returns NaN:
//Because NaN mean Not a number in comparison their are no number the result give NaN
console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); // NaN

//Null or Undefined 
let age = null;
console.log(age);

//Undefined
let person = 'Johan';
person = undefined;
console.log(person);

