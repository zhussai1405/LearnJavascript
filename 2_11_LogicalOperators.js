"use strict"
//Logical Operator with OR ||.
let hour= 7;
if(hour < 8 || hour > 18){
console.log('Office is Closed');
}

//Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous");

//Exapmple with AND &&.
//If the both operends are true, otherwise false 
let hours = 12;
let minutes = 30;
if(hours == 12 && minutes == 30){
    console.log('Time is 12:30');
}

//Shown the first define value
let firstName_ = "Faraz";
let lastName_ = null;
let nickName_ = "Fari";
console.log(firstName_ ?? lastName_ ?? nickName_ ?? "Anonymous");