"use strict"
let hour= 9;
if(hour < 8 || hour > 18){
console.log('Office is Closed');
}

//Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
    console.log(firstName || lastName || nickName || "Anonymous");