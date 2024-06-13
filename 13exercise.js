
//Question
// Declare a function greet that takes a name as a parameter
// Inside the function, log a greeting message to the console
// Call the function with your name as an argument


function greet (name){
    console.log(`Hello, ${name} ,Happy Birthday to you, many happy returns of the day`);
}
greet("Ahmed");




//Question
// Create a function expression isEven and assign it to a variable
// The function should take a number as a parameter
// Return true if the number is even, false otherwise
// Log the result of calling isEven with different numbers


let isEven = function(number){
    return number % 2 === 0;

};
console.log(isEven(2));




//Question
// Declare a function multiply that takes two parameters
// The function should return the product of the two parameters
// Call the function with different argument combinations
// Log the results to the console

function multiply(a,b){
    return a*b;

}
console.log(multiply(4 , 6));
console.log(multiply(5 , 2));
console.log(multiply(10 , 20));





//Question
// Declare a function greetUser that takes two parameters: name and greeting
// Provide a default value of "Hello" for the greeting parameter
// Inside the function, log the greeting and name to the console
// Call the function with and without providing the greeting argument

function greetUser(name , greeting){
    let defaultValue = "Hello"
    console.log(`${defaultValue}, ${name}`);
}
greetUser("Ahmed");
greetUser("Rahim")



//Question
// Declare a function calculateArea that takes two parameters: length and width
// The function should calculate and return the area of a rectangle
// Assign the returned value to a variable and log it to the console


function calculateArea(length, width){
    return length * width;
}
const length =50;
const width = 70;
const area = calculateArea(length,width);
console.log(area);




//Question
// Declare a function that takes a string and returns the string reversed
// Give the function a descriptive name following the naming conventions
// Call the function with different strings and log the results

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}
    console.log(reverseString("Faraz"));
    console.log(reverseString("Ahmed"));
    console.log(reverseString("Rahim"));
    






//Question
// Declare a function expression isPositive and assign it to a variable
// The function should take a number as a parameter and return true if positive
// Declare a function declaration isNegative with the same functionality
// Call both functions with different numbers and log the results

let isNegative = function(num){
    return num < 0;
};

let isPossitive = function(num){
    return num > 0;
};

console.log(isNegative(-3));
console.log(isPossitive(2));



//Question
// Rewrite the isEven function from the exercise above using an arrow function
// Log the result of calling the arrow function with different numbers

let isEvenNum = (number) => number % 2 === 0;
    

console.log(isEvenNum(2));