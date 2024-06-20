
// Question
// Declare a variable age and assign it a value
// Use an if statement to check if age is greater than or equal to 18
// If true, log "You can vote" to the console
// If false, log "You cannot vote"

let age = 18;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}



// Question
// Declare a variable score and assign it a value
// Use if...else if...else statements to check the following conditions:
// If score is greater than or equal to 90, log "A"
// If score is greater than or equal to 80, log "B"
// If score is greater than or equal to 70, log "C"
// If score is greater than or equal to 60, log "D"
// If score is less than 60, log "F"

let score = 85;
if(score >= 90){
    console.log("A");
}else if(score >= 80){
    console.log("B");
}else if(score >= 70){
    console.log("C");
}else if(score >= 60){
    console.log("D");
}else{
    console.log("F");
}
    



// Question
// Declare variables day and isWeekday
// Assign values representing a day (e.g., "Monday") and a boolean (true/false)
// Use nested if statements to check:
// If it's a weekday (isWeekday is true)
//   If the day is "Saturday" or "Sunday", log "Weekend"
//   Else, log "Weekday"
// If it's not a weekday (isWeekday is false), log "Holiday"

let day = "Monday";
let isWeekday = true;
if(isWeekday){
    if(day === "Saturday" || day === "Sunday"){
        console.log("Weekend");
    }else{
        console.log("Weekday");
    }
}else{
    console.log("Holiday");
}





// Question
// Declare variables num1 and num2, and assign them values
// Use the ternary operator to assign the larger value to a variable max
// Log the value of max to the console

let num1 = 50;
let num2 = 60;

let maxNum = (num1 > num2)? num1 : num2;
console.log(maxNum);




// Question
// Declare a variable day and assign it a value representing a day of the week
// Use a switch statement to log the corresponding day of the week
// For example, if day is "1", log "Monday"
// Include a default case for invalid input

let weekDay = 6;
switch (weekDay) {
    case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");
        break;
        default:
        console.log("Invalid day");
        break;
}




// Question
// Declare variables with different falsy values (e.g., 0, "", null, undefined, NaN)
// Use if statements to check if each value is falsy
// Log the result to the console


let falsyValue1 = 0;
if(!falsyValue1){
    console.log("Falsy value 1 is falsy.");
}
let falsyValue2 = "";
if(!falsyValue2){
    console.log("Falsy value 2 is falsy.");
}
let falsyValue3 = null;
if(!falsyValue3){
    console.log("Falsy value 3 is falsy.");
}
let falsyValue4 = undefined;
if(!falsyValue4){
    console.log("Falsy value 4 is falsy.");
}
let falsyValue5 = NaN;
if(!falsyValue5){
    console.log("Falsy value 5 is falsy.");
}



// Question
// Declare variables age, isStudent, and hasPermit
// Assign appropriate values to represent different scenarios
// Use logical operators (&&, ||, !) to check if a person can drive
// If age is greater than or equal to 18 AND (isStudent is true OR hasPermit is true), log "Can drive"
// Otherwise, log "Cannot drive"

let agee =17;
let isStudent = true;
let hasPermit = false;

//Faraz, what would happen if isStudent and hasPermit are both false? Explain how the code would execute and why
if(agee >= 18 && (isStudent || hasPermit)) {
    console.log(("Can drive"));
}else{
    console.log("cannot drive");
}