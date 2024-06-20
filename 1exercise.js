//Exercise 1 - Requirements
//
//Write a function with the following requirements
//It takes 2 parameters with names: base, height
//Provide an appropriate name for a function that returns the area of a right triangle
//You should be able to call the function with different bases and heights 
//and it should be able to calculate and return the Area of a right triangle
//find the formula for a right triangle.
//
//Very good Faraz, this is what I want to see.



//function definition here
function calculateAreaOfTriangle(base,height){    //Line 4
    const area = 0.5 * base * height;           //Line 8
    return area;                                //Line 7
}

const base = 10;
const height = 15;
const area = calculateAreaOfTriangle(base,height);    
console.log(`The area of the triangle with base ${base} and height ${height} is ${area}.`);











//function calls here - at least 3 different calls. All should work exactly the same