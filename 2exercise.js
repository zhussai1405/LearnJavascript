//Exercise 2 - Requirements
//
//All code should have appropriate logging
//
//Write a function that reverses a word
//the function takes a single parameter called word
//the function returns the reversed word 
// Rahim > mihar    Ahmed > demah
//You must convert the string to an array and cannot use any functions do that
//use a for loop to reverse the string
//Take the elements of the array and reverse them and store them in a variable
//the function needs to return the variable.



//     //for example
//     //[ 'R', 'a', 'h', 'i', 'm' ]
//     //'R', 'a', 'h', 'i', 'm'
//     // 0 ,   1 ,  2  , 3,   4 

//     console.log("Before for loop");



function wordReverse(word) {
    
    let charArray = [];
    for (let i = 0; i < word.length; i++) {
        charArray[i] = word[i];
    }
    
    
    let wordReverse = '';
    

    for (let i = charArray.length - 1; i >= 0; i--) {
    
        wordReverse += charArray[i];
    }
    
    
    return wordReverse;
}


console.log(wordReverse("Rahim")); 
console.log(wordReverse("Ahmed")); 
    
    
    

