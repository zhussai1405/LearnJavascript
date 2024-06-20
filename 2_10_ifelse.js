"use strict"
// let isGreater = (5 > 4);
// if(5 > 4){
// console.log(isGreater);
// }else{
// console.log(isGreater);
// }

let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let year = 2015;

if (year >= 201) {
  console.log("You are right");
} else {
  console.log("You are wrong.");
}
  
let num = (5 , 4);

if (5 < 4) {
  console.log("true");
} else {
  console.log("false");
}

let cond = (0 , 1);

if (0 == 1) {
    console.log("true");
  } else {
    console.log("false");
  }



function mySpeed(mySpeed){
  if(mySpeed < 25){
    console.log("Speed is going to slow:");
  }else if(mySpeed < 55){
    console.log("My speed is OK");
    console.log("Speed  is going to fast");
  }else if(mySpeed > 55){
  }else{
    console.log("Speed is fast, going to slow");
  }


}
//mySpeed(38);

//speed < 25 console.log statement is going to slow:
mySpeed(10);



//speed is between 25 to 55  console.log statement is going to speed is OK:
mySpeed(38); 


//speed > 55 console.log statement is going to fast:
mySpeed(70); 
    