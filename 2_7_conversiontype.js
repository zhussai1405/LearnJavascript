"use strict"
//string conversion
let name = "abc";
console.log(typeof name);

//change string to a number
let nameAsNumber = "123";
nameAsNumber = Number(name);
console.log(typeof nameAsNumber);


let str;
str = "123";
console.log(typeof str);

//String conversion 
let numStr = "123";
let numValue = Number(numStr);
console.log(numStr);


let number = 123;
let string = String(number); 
console.log(typeof string);


//boolean conversion
let value = 0;
let val = 1;
if(value){
    console.log('Value is truthy'); //value 0 is not true 1 is truthy value:
} else {
    console.log('Value is falsy');  // value 0 is falsy value:
} if (val){
    console.log('value is truthy'); // value 1 is truthy value:
} else {
    console.log('value is falsy');
}



//Non-Empty string boolean is always truthy; 
let msg = "Hello";
console.log("Non-Empty string is truthy: " + Boolean(msg));

//Empty string:
let no = ("");
console.log("Empty string is always falsey: " + Boolean(no));











