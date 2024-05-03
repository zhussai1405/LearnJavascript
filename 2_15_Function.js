"use strict"

//Global variable
let a = "apple";
function fruit(){
   console.log("A for, " + a);
   
}

fruit();

//Local variable
function fruit(){
    let b = "banana";
   console.log("B for, " + b);

   
}
fruit();


