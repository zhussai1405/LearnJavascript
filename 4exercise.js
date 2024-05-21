//Exercise 4 - Requirements
//
//All code should have appropriate logging
//
//Write a function that return the largest number of three parameters 
//Example word: lrgstNbr(3,6,9) -> 9 or (4,10,6) -> 10
//Name the function appropriately
//The function will have 3 parameters



function lrgstNbr(num1, num2, num3){
    let lrgstNbr = num1;
    if(num1 > lrgstNbr){
        lrgstNbr = num1;
    }
    if(num2 > lrgstNbr){
        lrgstNbr = num2;
    }
    if(num3 > lrgstNbr){
        lrgstNbr = num3;
    }
    return lrgstNbr;

}
let result = lrgstNbr(3, 6 , 9);
console.log("The largest number is 3 6 9" + lrgstNbr(3, 6,  9));

let result1 = lrgstNbr(5, 10, 15);
console.log("The largest number is 5, 10, 15" + lrgstNbr(5, 10 ,15));