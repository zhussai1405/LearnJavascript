"use strict";
//A variale is a container for storing data
//A variable beahaves as if it was the value that it was the value that it contains

//Two steps:
//1: Declaration (var, let, const)
//2: Assingnment (= assignment operator)



//Variable declared with var
var firstName = "Ahmed";
var firstName = "Hassan";
console.log(firstName);

//Vaiable declared with let 
let name$;
name$ = "Rahim Hassan";
console.log(name$);

//Variable declared with const 
const myBirthday = "08.05.1985";
//This is fail because you can't reassined a const variable.
//myBirthday = "05";  
console.log(myBirthday);



let firstNamee = "Faraz"
let agee = 38;
agee = agee +1;
console.log("My name is " + firstNamee);
console.log("I am", agee ,"years old");
console.log("Next month i am",agee,"years old");


let msg = "This is a test message";
console.log("The test message output: " + msg);

//we can use different name of variable in multiple line:
let userName = "Ahmed";
let age = 5;
let message = 'Ahmed is five years old, He read in class Prep-1';
console.log("UserName:" + userName, "Age: " + age, "Message: " +message);

//we can use multiple variables in one line :
let name = "Rahim" , ageNum = 3 , msge = "He is not going school yet";
console.log("firstName: " +name, "Age: " + ageNum, "Message: " + msge);

//we can change the value or variable put in another 
let value;
value = 4;
value = 2;
console.log(value);

//we can declared two variables and copy data from one into the other 
  let firstName_ = "Ahmed";
  let lastName = "Hassan";
  
  console.log(firstName);
  console.log(lastName);
 


//Difference between var , let and const.
//Variable with var.
//Explaining that var is Global variable and its redeclared outside the blockscope.
if (true){
  var varVariable = 'This is ture'
}
var varVariable = 'This is false'

console.log(varVariable);

//Variable with let.
let letVariable = 'let with var'


console.log(letVariable);


