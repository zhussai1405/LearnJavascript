


// Rewrite the following function expression as an arrow function
let greet = (name) => `Hello, ${name}!`;
    




// Write an arrow function that takes two numbers and returns their sum
// Use the single-line syntax

// Call the function with different arguments and log the results

let sum = (a , b) => a + b;

console.log(sum(1 , 2));
console.log(sum(3 , 4));
console.log(sum(5 , -6));
console.log(sum(7 , 8));





// Write an arrow function that takes three parameters (a, b, c)
// The function should return the largest of the three numbers
// Use the single-line syntax if possible

// Call the function with different arguments and log the results

let largestNum = (a , b , c) => Math.max(a,b,c);

console.log(largestNum(1 , 2, 3));
console.log(largestNum(3 , 4, 11));
console.log(largestNum(5 , 9, 6));
console.log(largestNum(7 , 8,  1));



// Write an arrow function that takes an array of numbers
// The function should return a new array with only even numbers
// Use the multiline syntax with curly braces and the return statement

// Call the function with different arrays and log the results

let evenNumbers = (numbers) => {
  return numbers.filter(number => number % 2 === 0);
};

console.log(evenNumbers([1,2,3,4,5]));
console.log(evenNumbers([10,15,20,25]));






// Use an arrow function as a callback for the setTimeout function
// The arrow function should log "Hello, World!" after 2 seconds


setTimeout(() => {
  console.log("Hello, World");

}, 2000);





// Write an arrow function that returns the current date and time
// The function should not take any parameters

// Call the function and log the result


let getCurrentDateTime = () => new Date();
console.log(getCurrentDateTime());





// Create an object with a method that uses an arrow function
// The arrow function should log the value of this.name

let myObject = {
  name : 'Pen',
  logName : function() {
    let arrowFunction = () => {
      console.log(this.name);
    };
    arrowFunction();
  }
};
myObject();



