//Exercise 5 - Requirements
//
//All code should have appropriate logging
//
//Write a function that swaps the first and last letters of a word
//Example word: 
//  pindi -> iindp
//  Rahim -> mahiR
//  Maria -> aariM
//
//Name the function appropriately
//The function will have 1 parameter
//Convert the variable to an array.
//Switch the first element into last element
//Function return the word 
// This is only be a string.
//Call the function with different words as examples.
//
//Good attempt Faraz but this is not working correctly, let me give you a hint.
//convert the string to an array first. 
//than get the first element of the array and store it in a variable
//also get the last element of the array and store it in a different variable
//update the original string at the first element and the last element with the switched variable letters

function swapFirstAndLast(swapString){
   let array = swapString.split('');

   let firstElement = array[0];
   let lastElement =array[array.length - 1];
   
   array[0] = lastElement;
   array[array.length - 1] = firstElement;
   let result = array.join('');
   return result;
    
}


console.log(swapFirstAndLast("Pindi"));
