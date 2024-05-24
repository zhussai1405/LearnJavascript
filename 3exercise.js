//Exercise 3 - Requirements
//
//All code should have appropriate logging
//
//Write a function that converts the first letter ONLY of a word to uppercase and return the word
//Example word: test -> Test
//Name the function appropriately
//Function name will be capitalizeWord(word)
//Parameter is only be a string.
//The function will have 1 parameter
//convert parameter to array 
//Get first element of arary and convert uppercase.
//
//Very good Faraz





function capitalizeWord(str){
   const capitalizeWord = str.charAt(0).toUpperCase() + str.slice(1)
    return capitalizeWord;
}
const str = "test";
const result = capitalizeWord(str);
console.log(result);