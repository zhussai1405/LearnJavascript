"use strict"

//Boolean comparison 
let result = (5 > 4);
console.log("check greater num:" + result);

let answer = (5 < 4);
console.log("check greater num:" + answer);

// In alphabetically comparison(a < z) <=> (z > a):
let fruit;
fruit = ("apple" > "pineapple");
console.log("Pineapple (p) is greater than apple(a): " + fruit);


//According to charset:First character 2 is greater than second operand of first 1:
let strGreater = ("2" > "12");
console.log("Strings number comparison 2 > first char of compare num 1:" + strGreater);

//Lose Equality comparison to check 
console.log(undefined == null);     //In lose equality check boths are falsy values but in equality check comparison Output is true

//Strict equality comparison to check 
console.log(undefined === null);    //Output is false because they are not a same type


