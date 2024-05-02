"use strict";


let a = 1, b = 1;

let c = ++a; 
console.log("Increment sign is added before: "+ c);
let d = b++; 
console.log("Increment sign is added after: " + d);

//Basic Operator Math
//Unary operands if its single
let r = 1;
r = -r;
console.log("The value of 'r' is negeitve: " + r);

//The binary operands has two operands

let x = 2 , y = 4;
console.log("Basic opertor subtraction the values: " + y - x);

let e = 2 , f = 4;
console.log("Basic opertor Addition the valuese: " + f);

//Remainder
let g = 5, h = 6;
console.log("Remainder value: " + h % g);

//Exponentation 
console.log("Square of Two: " + 2**2);
console.log("Cube of Tube: " + 2**3);
//squareroot or cubeic root
console.log("Square Root: " + 2**(1/2));
console.log("cubic Root: " + 2**(1/3));

//string concatenation with binary +
let name = "Faraz"+"Hassan";
console.log("concatenation the name: " +name);

let str = "1";
let num = 2;
console.log("concatenation the string or num: " + ("1" + 2));

let s = 1;
let n = "2";
console.log("concatenation the num or string: " + (2 + "1"));

//Unary conversion unary +
let i = 1;
console.log(+i);

let j = -2;
console.log(+j);

//Example 2

let apple = "2";
let oranges = "3";
console.log(+apple+  +oranges);

//Assignment return a value 
let k =1;
let l = 2;
let m = 3 -(k = l + 1);
console.log(k);
console.log(l);

// Modify in Place
let numb = 2;
numb +=5;
numb *=4;
console.log(numb);

//Increment / Decrement 
let counter = 2;
counter++;
console.log("The increament sign is added after: " + counter);

let minusCounter = 1;
--minusCounter;
console.log(minusCounter);


let count = 2;
count--;
console.log("The decrement sign is added after: " +count);



