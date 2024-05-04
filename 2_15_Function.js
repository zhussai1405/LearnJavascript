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


