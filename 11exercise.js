


//Question
// // Declare variables with boolean values
// let x = true, y = false;

// // Use the && operator to combine the variables
// // Log the result to the console
// console.log(x && y); // Expected output: false

// // Try different combinations of boolean values






//Question
// // Declare variables with boolean values
// let p = true, q = false;

// // Use the ! operator to negate the values
// // Log the results to the console
// console.log(!p); // Expected output: false
// console.log(!q); // Expected output: true

// // Try double negation (!!)
// console.log(!!p); // Expected output: true






//Question
// // Declare variables with different values
// let x = 0, y = 1;

// // Use the && operator with a function call
// x && console.log('This will not be printed');
// y && console.log('This will be printed');

// // Use the || operator with a function call
// x || console.log('This will be printed');
// y || console.log('This will not be printed');






//Question
// // Declare variables with different values
// let x = 5, y = 10, z = 0;

// // Combine logical operators to create complex conditions
// // Log the results to the console
// console.log((x > 0) && (y > 0) && (z === 0)); // Expected output: true
// console.log((x > 0) || (y < 0) || (z !== 0)); // Expected output: true





//Question
// // Define a function that takes two parameters
// function greet(name, greeting) {
//     // Use the ?? operator to provide a default greeting
//     let defaultGreeting = greeting ?? 'Hello';
//     console.log(`${defaultGreeting}, ${name}!`);
//   }
  
//   // Call the function with different arguments
//   greet('Alice'); // Expected output: 'Hello, Alice!'
//   greet('Bob', undefined); // Expected output: 'Hello, Bob!'
//   greet('Charlie', 'Hi'); // Expected output: 'Hi, Charlie!'






//Question
// // Declare variables with different values
// let a = 0;
// let b = null;
// let c = 5;

// // Use parentheses to control operator precedence
// let result = (a ?? b) ?? c; // Expected output: 5
// console.log(result);

// // Without parentheses, the expression is evaluated differently
// result = a ?? b ?? c; // Expected output: 5
// console.log(result);


