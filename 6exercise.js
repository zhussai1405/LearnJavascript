//Variable practice

//Question 1 
// Declare variables name, age, and isStudent
// Assign your name (string), age (number), and student status (boolean)
// Log all three variables to the console

// Reference Q in line 4.
let person = 'John';
let age = 30;
let isStudent = true;   //boolean yes or no
console.log(person,age,isStudent);

//Question 2
// Declare a constant variable PI and assign it 3.14159
// Try to reassign a new value to PI and observe the error
const PI = 3.14159;
//PI = 2.14;
console.log(PI);
//It going to be error, because in const variable we cannot reassign a new value.


//Question 3
// Declare a global variable globalVar with value 10
// Create a function updateGlobalVar() to increment globalVar by 5
// Call the function and log the new globalVar value
// Declare a local variable localVar inside the function with value 20
// Try to log localVar outside the function - explain what will happen
let globalVar = 10;
function updateGlobalVar(){
    globalVar += 5;
    

}
updateGlobalVar();
console.log(globalVar);

//Now declare a local variable
function updateLocalVar(){
    let localVar = 20;
    console.log(localVar);
    
}
updateLocalVar();

//Question 4
// Log the value of x (before declaring it)
// Declare a variable x and assign it 5
// Explain the output


//before declaring log given undefined value is s
let x;
x = 5;
console.log(x);



//Question 5
// Declare a variable x with value 10 outside a function
// Create a function shadowing() with another variable x = 20
// Inside the function, log the value of x
// Call the function and observe the output
// Explain what shadowing or masking of variables is

let x_ = 10;
function shadowing(){
    let x_ = 20;
    console.log(x_);
}
shadowing();



//Question 6
// Declare variables a and b with values 5 and 10
// Swap the values of a and b using a temporary variable
// Log the values of a and b before and after swapping

let a = 5;
let b = 10;
console.log(`a=${a}, b = ${b}`);


