//Exercise 4 - Requirements
//
//All code should have appropriate logging
//
//Write a function that return the largest number of three parameters 
//Example word: lrgstNbr(3,6,9) -> 9 or (4,10,6) -> 10
//Name the function appropriately
//The function will have 3 parameters
//
//Very good Faraz, your code works but there is 1 issue
//look at your logic on line 17 and tell me why line 18 will never execute? That line becomes unnecessary



function lrgstNbr(num1, num2, num3){
    let lrgstNbr = num1;
    if(num2 > lrgstNbr){
        lrgstNbr = num2;
    }
    if(num3 > lrgstNbr){
        lrgstNbr = num3;
    }
    return lrgstNbr;

}
let result = lrgstNbr(3, 6 , 9);
console.log("The largest number is: " + lrgstNbr(3, 6, 9));

let result1 = lrgstNbr(5, 10, 15);
console.log("The largest number is: " + lrgstNbr(5, 10 ,15));

console.log("The largest number is: " + lrgstNbr(5, 19 ,15));