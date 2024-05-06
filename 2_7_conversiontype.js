"use strict"
//string conversion
let name = "abc";
console.log(typeof name);

//Boolean type conversion
let boolValue = true;
console.log(typeof boolValue);  //conversion type boolean 



//change string to a number
let strAsNumber = "123";
strAsNumber = Number(strAsNumber);
console.log(typeof strAsNumber);


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

let strNum = "100" + 24;
console.log(strNum);

//String conversion into numeric 123
let str_ = "123";
str_ = Number(str_);
console.log("Convert string into numeric converion in number: " + str_);

//String conversion into numeric 123
let numString = 123;
numString = num.toString(123);
console.log("Convert number into string value: " + numString);














