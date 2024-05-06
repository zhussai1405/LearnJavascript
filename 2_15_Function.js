"use strict"

//Global variable
let a = "apple";
function fruit(){
   console.log("A for, " + a);
   
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
 

//Local variable
function fruit(){
    let b = "banana";
   console.log("B for, " + b);

   
}
fruit();

//HappyBirthday song in function decalration
function happyBirthday(name,age){
   console.log("Happy Birthday to you");
   console.log("Happy Birthday to you");
   console.log(`Happy Birthday to dear ${name}`);
   console.log(`Happy Birthday to you, you are ${age} years old`);
   console.log("Happy Birthday to you");
   
}
happyBirthday("Faraz", 39);

//function add two numbers 
function add(x,y){
   let result = x+y;
   console.log(result);
}
add(2,3);

//function subtract two numbers
function subtract(x,y){
   let result = x-y;
   console.log(result);
}
subtract(4-1);

//function divide two numbers
function divide(x,y){
   let result = x/y;
   console.log(result);
}
divide(10,2);

//function remainder two numbers
function remainder(x,y){
   let result = x%y;
   console.log(result);
}
remainder(3,2);



