

// Question
// Declare variables and assign values using =
// Use compound assignment operators +=, -=, *=, /=, %=
// Observe how the values change after each operation

let a = 3;
a += 3;
console.log(a);

let b = 6;
b -= 5;
console.log(b);


let c = 10;
c *= 5;
console.log(c);


let d = 10;
d /= 5;
console.log(d);


let e = 10;
e %= 5;
console.log(e);





// Question
// Declare variables with different values (numbers, strings, booleans)
// Use comparison operators (>, <, >=, <=, ==, ===, !=, !==)
// Log the results of the comparisons to the console

let num1 = 6;
let num2 = 12;
console.log(num1 < num2);
console.log(num1 > num2);

let str1 = "Faraz";
let str2 = "Hassan";
console.log(str1 >= str2);
console.log(str1 <= str2);


let comp1 = "10";
let comp2= 11;
console.log("10" == 11);
console.log(5 == 5);



console.log(11 === "10");
console.log(5 === 4);


console.log("0" != 0);

console.log("0" !== 0);





// Question
// Declare variables with boolean values
// Use logical AND (&&), OR (||), and NOT (!) operators
// Combine logical operators with comparison operators
// Log the results to the console and explain the output

let isGreater = true;
let isLessThan = false;
let passingMarks = 35;
console.log(isGreater && isLessThan);
console.log(isGreater && (passingMarks > 35));

console.log(isGreater || isLessThan);
console.log(isGreater || (passingMarks < 35));

console.log(!isGreater);
console.log(!passingMarks);



// Question
// Declare variables with different values
// Use the ternary operator to assign values based on conditions
// Rewrite the ternary expressions using if-else statements

let num = (5 , 4);

if (5 < 4) {
  console.log("true");
} else {
  console.log("false");
}
if(5 > 4) {
    console.log("true");
}else{
    console.log("false");
}


let age = 18;
let overAge = 20;
let isCitizen = false;

let canDrive = (age >= 18 && isCitizen)? 'yes' : 'No';
let senior = (age => 26 && hasdrivingLicense)? 'yes' : 'No';

console.log(`canDrive: ${canDrive}`);
console.log(`senio: ${senior}`);




// Question
// Declare variables with string values
// Concatenate strings using the + operator
// Combine strings with numbers and other data types
// Observe the implicit type conversions
// Explain implicit type conversion
// Faraz, you are not using the + operator to concatenate the strings and number
// You haven't explained what is happening 

let name = "John";
let greeting = 'Hello';
let message = greeting  + name;;
console.log(message);


let firstName = "John";
let lastName = "Wick";
let hiGreeting = 'Hello';
let personAge = 30;
let isBirthday = true;
let message_ = (`${greeting} ,${firstName} ${lastName} "Happy Birthday, You are " ${personAge} " years old`);
console.log(message_);



