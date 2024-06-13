//Variable practice

//Question 1 
// Declare variables name, age, and isStudent
// Assign your name (string), age (number), and student status (boolean)
// Log all three variables to the console

// Reference Q in line 4.
let person = 'John';                            //Declare a variable with value string
let age = 30;                                   //Declare a variable with number value
let isStudent = true;                           //Declare a boolean value yes or no
console.log(person,age,isStudent);              //log the variable 

//Question 2
// Declare a constant variable PI and assign it 3.14159
// Try to reassign a new value to PI and observe the error
const PI = 3.14159;                             //Declare a constant variable 
//PI = 2.14;
console.log(PI);                                //print the const variable PI
//It going to be error, because in const variable we cannot reassign a new value.


//Question 3
// Declare a global variable globalVar with value 10
// Create a function updateGlobalVar() to increment globalVar by 5
// Call the function and log the new globalVar value
// Declare a local variable localVar inside the function with value 20
// Try to log localVar outside the function - explain what will happen
let globalVar = 10;                 //Declare a global variable 
function updateGlobalVar(){         //Create a function 
    globalVar += 5;                 //increment globalVar by 5
    

}
updateGlobalVar();                  //call the function 
console.log(globalVar);             //log the new global var value



//Now declare a local variable
function updateLocalVar(){          //Declare a function 
    let localVar = 20;              //local variable inside the function with value 20
    console.log(localVar);          //log the local variable
    
}
updateLocalVar();                   //call the function (function name )



//Question 4
// Log the value of x (before declaring it)
// Declare a variable x and assign it 5
// Explain the output


//before declaring log given undefined value is s
let x;
x = 5;                      //Declare a x variable to assign value 5
console.log(x);             //log the value of x



//Question 5
// Declare a variable x with value 10 outside a function
// Create a function shadowing() with another variable x = 20
// Inside the function, log the value of x
// Call the function and observe the output
// Explain what shadowing or masking of variables is

let x_ = 10;                            //Declare a variable  x with value 10
function shadowing(){                   //Create a function declaration
    let x_ = 20;                        //Declare Inside the function variable x 
    console.log(x_);                    //log the value of x
}
shadowing();                            //Call the function 



//Question 6
// Declare variables a and b with values 5 and 10
// Swap the values of a and b using a temporary variable
// Log the values of a and b before and after swapping

let a = 5;                              //Declare a variable a
let b = 10;                             //Declare a variable b
console.log(`a=${a}, b = ${b}`);


