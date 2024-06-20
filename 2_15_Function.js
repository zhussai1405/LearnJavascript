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

//Function Declaration 
function greet(greet = "Hello" , name = "Rahim"){
   console.log(`${greet} , ${name}`);
}
greet();
name();

//Function Expression (Anonymus Function)
const greetings = function(name = "Ahmed", greetings = "Hello"){
   console.log(`${greetings}, ${name}`);
};
greetings();
name();

//Alternative default parameters 
function message(text){
   if(text === undefined){
   text = 'Empty Message';
   }
   console.log(text);

}
message();

//login username function
function loginUserMessage(userName){
   console.log('Please enter a user name');

   return `${userName} just logged in`;
}
console.log(loginUserMessage("Faraz Hassan"));

//function add to Numbers 
let x = 2;
let y = 5;
function addTwoNum(){
   return x + y;
}
console.log("sum of two numbers: "+ addTwoNum(2, 5));


//Function declared with outer variable 
let userName = 'John';
function showMessage(){
   userName = 'Bob';
   let message = "Hello," + userName
   console.log(message);
}
console.log(userName);  //John
showMessage();          //Hello Bob
console.log(userName);  //Bob


//Default Values
function showMessage(from , text){
   if(from === undefined){
      text = 'no text given';
   }
   console.log("result" , from  + " "+ text);
}



