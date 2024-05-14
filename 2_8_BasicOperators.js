"use strict";
//Postfix and prefix form:
//Increment operator ++ sign is before the variable to increment or declare the value of let a 
let a = 2, b = 4;

let c = ++a; 
console.log("Increment sign is added before: "+ c); //prefix form return the new value
//Increment operator ++ sign is after the variable to increment or declare the value of let d
let d = b++; 
console.log("Increment sign is added after: " + d); //postfix form return the old value:

//Basic Operator Math
//Unary operands if its single
let r = 1;
r = -r;
console.log("The value of 'r' is negeitve: " + r);

//The binary operands has two operands
//Subtract the both values x and y
let x = 2 , y = 4;
console.log("Basic opertor subtraction the values: " + (y - x));
//Sum of the two variables 
let e = 2 , f = 4;
console.log("Basic opertor Addition the valuese: " + (e + f));

//Remainder
let g = 5, h = 6;
console.log("Remainder value: " + h % g);

//Exponentation of value 2
let o;
o = 2**2
console.log("Square of Two: " + o);
//Exponentation cube of value 2
let p;
p = 2**3;
console.log("Cube of Tube: " + p);
//squareroot or cubeic root
let q;
q = 2**(1/2)
console.log("Square Root: " + q);
//Qubicroot of value 2
let t;
t = 2**(1/3);
console.log("cubic Root: " + t);

//string concatenation with binary +
let name = "Faraz"+"Hassan";
console.log("concatenation the name: " +name);
//Concatenation the numstring or number
let str = "1";
let num = 2;
console.log("concatenation the string or num: " + ("1" + 2));
//Concatenation the number or numstring 
let s = 1;
let n = "2";
console.log("concatenation the num or string: " + (2 + "1"));

//Unary conversion unary +
let i = 1;
console.log(+i);    //+i convert the variable i into number already given (1) there is no change in this case

let j = -2;
console.log(+j);    //+j convert the variable i into number already given (-2) there is no change in this case

//Example 2

let apple = "2";
let oranges = "3";
console.log(+apple+  +oranges); //Add the values of variable name apple or oranges

//Assignment return a value 
let k =1;
let l = 2;
let m = 3 -(k = l + 1);     //The value of k is first computed is 3 and subtract the value m is 0:
console.log(k);             //k will be 3
console.log(l);             //l will be 2

// Modify in Place
let numb = 2;
numb +=5;                   //numb 2 +=5 is 7
numb *=4;                   //value 7 *= to num 4
console.log("After modify the numb values: " +numb);

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



