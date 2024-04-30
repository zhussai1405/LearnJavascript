"use strict"
//Logical Operator with OR ||.
let hour= 9;
if(hour < 8 || hour > 18){
console.log('Office is Closed');
}

//Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous");

//Exapmple with AND &&.
let hours = 12;
let minutes = 30;
if(hours == 12 && minutes == 30){
    console.log('Time is 12:30');
}