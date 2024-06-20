// These practice exercises cover various aspects of loops in JavaScript, 
// including while, do...while, for, nested loops, breaking 
// and continuing loops, labeling loops, and loop optimization.




//Question
// Write a program that prints all even numbers from 2 to 20 using a while loop

let num = 2;

while(num <= 20){
    console.log(num);
    num += 2;
}








//Question
// Write a program that calculates the sum of all numbers from 1 to 10 using a for loop
// Log the result to the console

let sum = 0;

for(let i = 1; i < 10; i++){
    sum +=i;
}
console.log(+sum);  //1,2,3,4,5,6,7,8,9 sum of all numbers is 45





//Question
// Write a program that prints a multiplication table for numbers 1 to 9
// Use nested loops to achieve this
// The output should look like:
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 9 x 9 = 81

function printMultiplicationTable(){
    for (let i = 1; i < 9; i++){
        let row = "";
        for (let j = 1; j < 9; j++){
            row += (i * j).toString().padStart(3,'')+'';
            console.log(row);
            
        }
    }
}
printMultiplicationTable();










//Question
// Write a program that finds the first positive even number in an array
// If no positive even number is found, log "Not found"
// Use a for loop and the break statement
// const numbers = [5, 7, -3, 8, 11, 2, -9];

const numbers = [5, 7, -3, 8, 11, 2, -9];

//step 1 , Get the list of numbers which is the numbers in line 66
//step 2 use for loop to step over or check each number
//step 3, check inside the for loop each number is positive or negative
//step 4, Inside the for loop check if number is odd or even, by using moduls

let found = false;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0 && numbers[i] %2 === 0){
        console.log(numbers[i]);
        found = true;
        break;
    } 
}
if(!found){
    console.log("Not Found");
}









//Question
// Write a program that logs all odd numbers from 1 to 20
// Use a for loop and the continue statement to skip even numbers


for (let i = 1; i < 20; i++){
    if (i % 2 === 0){
        continue;
    }
    console.log(i);
}



