//Question 1
// Declare variables with different data types
// Convert each variable to a string using String() and concatenation
// Log the results and observe the differences
//number
let number = 50;
let numberToString = String(number);


//Faraz, look up the word concatenate in dictionary and tell me what that means?
//After looking up the word, are you concatenating a string in the below code?
let concatenatedString = "Number";
console.log(concatenatedString);

//boolean
let boolVal = true;
let strVal = String(boolVal);

//this holds a string
let concatenateString = "Boolean";
//this holds a boolean
let varBool= true;

console.log(concatenateString);

//null
let nullVal = null;
let nullToString = String(nullVal);

let concatString = "null";
console.log(concatString);


//undefined
let undefinedValue = undefined;
let undefinedToString = String(undefinedValue);

let concate
String = "undefined";
console.log(concatString);



//Question 2
// Declare variables with string values representing numbers
// Convert them to numbers using Number() and parseInt()
// Handle cases where the conversion results in NaN
// Log the results and explain the differences

let str = "246";
//convert using num()
let num = Number(str);
let int = parseInt(str,10);
console.log("parseInt" + int);

if(isNaN(num)){
    console.log(`Conversion of ${str} using Number()resulted in NaN`);
}else{
    console.log(`Conversion of ${str} using Number()resulted in ${num}`);
}








//Question 3
// Declare variables with different falsy and truthy values
// Convert them to booleans using Boolean() and !!
// Log the results and explain the falsy/truthy behavior

let falsy = false;
let truthy = true;
console.log(Boolean(falsy));
console.log("Boolean result:" + !!falsy);               //boolean result falsy

console.log(Boolean(truthy));       //boolean reault truthy
console.log("Boolean result truthy: " + !!truthy);



let falsy1 = 0;
let truthy1 = 1;
console.log(Boolean(falsy1));
console.log(!!falsy1);

console.log(Boolean(truthy1));
console.log(!!truthy1);








//Question 4
// Perform arithmetic operations involving mixed data types
// Observe and explain the implicit type conversions
// For example: "5" - 3, true + 1, null * 2, etc.

let result ="5"- 3;             //"5" string converted into number 
console.log(result);


let result1 = true + 1;         //true converted into number 1
console.log(result1);


let result2 = null * 2;         //null is 0 and 0 * 2 = 0
console.log(result2);


//Question 5
// Use logical operators (&&, ||, !) with mixed data types
// Observe and explain the implicit type conversions
// For example: "hello" && 0, !!"", 0 || "false", etc.

let greet = "hello";
console.log("hello" && 0);
console.log("hello" || 0);
console.log(! 0);



//Question 6
// Convert values to different types using constructors
// For example: Number("3.14"), Boolean([]), String(42), etc.
// Handle cases where the conversion results in unexpected values

let numValue = Number("3.14");
console.log(numValue);

let booleanValue = Boolean([]);
console.log(booleanValue);

// let stringValue = String(42);
// console.log(stringValue);
