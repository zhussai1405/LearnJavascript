// Faraz, focus on what the code is doing, really try to understand the code line by line.
// What values are the variables holding when the function is called 
// In your terminal run --  node learnJavascript.js

//We are defining a funciton with the name maxNumber that takes in 2 parameters and tells us what is the larger number
//It should also tells us if we are inputting the incorrect parameter and data type. A boolean is not a number.
//Javascript doesn't care what type we put in, so that's why as a programmer we have to check on the type and inform the caller of the function that the parameter value is incorrect
//We should only define a function once and it is considered bad practice to define a function with the same name twice. 

function maxNumber(num1, num2) {

  
  //console.log("The typeof values for each parameter is num1: " + typeof num1 + "  and num2: " + typeof num2);

  //console.log('The input parameters being passed in are -- num1: ' + num1 + ' num2: ' + num2);

  if (num1 == null) {
    console.log('null value passed in for num1' + num1);
  } else {
    console.log('null value passed in for num2' + num2);    //null return
  }
  if (num1 == null) {
      return true;
  }else{
      return false;                                       //boolean return
  } 

  }
  

console.log(maxNumber(45,null));
console.log(maxNumber(35 , 25));

// this method works fine and doesn't need to be changed
// uncomment and run each function call one at a time. comment it out after being done.
//console.log("This is a line being called before calling the maxNumber function");

//maxNumber("test", 25);
//maxNumber(35, 25);

// //fix the code above to make the following work, run one function call at a time.
//maxNumber(45, null);
// maxNumber(23,true);
//maxNumber("test string", "test string2");
//maxNumber(10,10);
//maxNumber(10, null);

