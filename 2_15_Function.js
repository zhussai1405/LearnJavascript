"use strict"

//Global variable
let a = "apple";
function fruits(){
console.log("A for, " + a);
   
}

fruits();

//Local variable
function fruit(){
   let b = "banana";
  console.log("B for, " + b);

  
}
fruit();


//Function declaration 
let firstName = "Ahmed";
let lastName = "Hassan";

function greet(){
   console.log("Hello" + firstName," " + lastName);
}
greet();


function age(){
   let age1 = 36;
   let age2 = 38;
   console.log("age after two years, " + age1," "+age2);
}
age();

//Function Declaration
function greet(name) {
   return(`Hello, ${name}!`);
 }
 //Calling the function
 console.log(greet("Rahim Hassan"));

 //Function Expression:
 const name = function(name) {
   return `Hello, ${name}!`;
 };
 
 // Calling the function
 console.log(name("Ahmed Hassan")); 
 


//HappyBirthday song in function decalration
function happyBirthday(name,age){
   console.log("Happy Birthday to you");
   console.log("Happy Birthday to you");
   console.log(`Happy Birthday to dear ${name}`);
   console.log(`Happy Birthday to you, you are ${age} years old`);
   console.log("Happy Birthday to you");
   
}
happyBirthday("Ahmed", 6);

//function of expression add two numbers 
let sum = function(x,y){
   let result = x+y;
   console.log(result);
}
sum(2,3);

//function  of expression subtract two numbers
let subtract = function(b,c){
   let result = b - c;
   console.log(result);
}
subtract(4,1);

//function divide two numbers
function divide(x,y){
   let result = x/y;
   console.log(result);
}
divide(10,2);

//function remainder two numbers
function remainder(x , y){
   let result = x % y;
   console.log(result);
}
remainder(3,2);

//Function even or odd
function evenOrOdd(number){
   if(number % 2 === 0){
      return "Even";
   }else{
      return "Odd";
   }
}
let number1 = 10;
let number2 = 7;
let number3 = 15;
console.log(number1 + 'is ' + evenOrOdd(number1));
console.log(number2 + 'is ' + evenOrOdd(number2));
console.log(number3 + 'is ' + evenOrOdd(number3));


