"use strict"
//Logical Operator with OR ||.
let hour= 7;
//if(condition1 || condition2)
if(hour < 8 || hour > 18){      //true
console.log('Office is Closed');
}

//Getting the first truthy value from a list of variables or expressions.
let firstName = null;
let lastName = null;
let nickName = 'John';


if(firstName || lastName || nickName){  //true
console.log("This is true");
}


//Exapmple with AND &&.
//If the both operends are true, otherwise false 
let hours = 12;
let minutes = 30;
let seconds = 30;
if(hours == 12 && minutes == 30 && seconds == 30){
    console.log('Time is 12:30');
}
else{
    console.log("Time is not 12:30");
}

//Shown the first define value
let firstName_ = "Faraz";
let lastName_ = null;
let nickName_ = "Fari";
if(firstName_ ?? lastName_ ?? nickName_ ?? "Anonymous");
console.log('This is')

//Condition with And && Operator
let age = 20;
if (age >= 18 && age <= 40 && age != 30 ){
    console.log('This is true');
}else {
    console.log('This is false');
} 

//Condition with OR || Operator
let ageNum = 35;
if (ageNum >= 18 || ageNum <= 40){
    console.log('This is true');
}else {
    console.log('This is false');
} 