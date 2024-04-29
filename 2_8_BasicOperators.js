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
console.log(r);

//The binary operands has two operands

let x = 2 , y = 4;
console.log(y - x);

let e = 2 , f = 4;
console.log(e + f);

//Remainder
let g = 5, h = 6;
console.log(h % g);

//Exponentation 
console.log(2**2);
console.log(2**3);
//squareroot or cubeic root
console.log(2**(1/2));
console.log(2**(1/3));

//string concatenation with binary +
let name = "Faraz"+"Hassan";
console.log(name);

let str = "1";
let num = 2;
console.log("1" + 2);

let s = 1;
let n = "2";
console.log(2 + "1");

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

let count = 2;
count--;
console.log("The decrement sign is added after: " +count);



