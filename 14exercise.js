

//Question
// Declare a function expression and assign it to a variable
// const greet = function(name) {
//     console.log(`Hello, ${name}!`);
//   };
  
//   // Call the function expression
//   greet('Alice');
  
//   // Now, try to declare a function declaration with the same name
//   // Observe the behavior and explain the difference
//   function greet(name) {
//     console.log(`Hi, ${name}!`);
//   }
  
//   greet('Bob');


//Function Expression
    const greet = function(name) {
       console.log(`Hello, ${name}!`);
   };
      
    
    greet('Alice');

//Function Declaration 
    function greeting(name) {
        console.log(`Hi, ${name}!`);
      }
          
    greeting('Bob');






//Question
// // Declare an anonymous function expression and assign it to a variable
// const square = function(num) {
//     return num * num;
//   };
  
//   // Call the anonymous function and log the result
//   console.log(square(5));

// //Explain what an anonymous function is  
    //anonymous mean function have no name or its used for temporarily aurgument.


const square = function(num) {
    return num * num;
     };
      
    
    console.log(square(5));


//Question
// Create an IIFE that logs a message to the console
// (function() {
//     console.log('This is an IIFE!');
//   })();
  
//   // Create an IIFE that returns a value
//   const result = (function(a, b) {
//     return a + b;
//   })(3, 5);
  
//   console.log(result);

//Explain what Immediately Invoked Function Expressions (IIFE) and what they are used for
(function() {
        console.log('This is an IIFE!');
       })();

const result = (function(a, b) {
      return a + b;
       })(3, 5);
          
        console.log(result);





//Question
// Rewrite the square function from above as an arrow function
// // Declare an anonymous function expression and assign it to a variable
// const square = function(num) {
//     return num * num;
//   };

// Call the arrow function and log the result
//console.log(square(7));

const squareRoot = (num) => {
    return num * num;
     };
      
    
    console.log(squareRoot(5));




//Question
// // Define a function that returns a function expression
// function createGreeting(name) {
//     return function() {
//       console.log(`Hello, ${name}!`);
//     };
//   }
  
//   // Call the returned function expression
//   const greetAlice = createGreeting('Alice');
//   greetAlice();

// Explain what is happening in the code above


function createGreeting(name) {
     return function() {
       console.log(`Hello, ${name}!`);
     };
   }
  
   
  const greetAlice = createGreeting('Alice');
   greetAlice();