"use strict"

//Boolean comparison 
let result = (5 > 4);
console.log("check greater num and result in boolean:" + result);

let answer = (4 < 5);
console.log("check greater num and result in boolean:" + result);


let fruit = ("apple" > "pineapple");    // In alphabetically (a < z) <=> (z > a):
fruit = ("a > p");  //falsy
console.log("According to the JS alphabeticaly pineapple is > apple: " + fruit);


//According to charset:First character 2 is greater than second operand of first 1:
let strGreater = ("2" > "12");
console.log("Strings number comparison 2 > first char of compare num 1:" + strGreater);

//Equality comparison to check 
console.log(undefined == null);

//Strict equality comparison to check 
console.log(undefined === null);

