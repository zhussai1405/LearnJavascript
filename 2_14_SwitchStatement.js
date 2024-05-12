"use strict"
let a = 2+3;

switch (a) {
    case 3:
        console.log('To small');
        break;
    case 4:
        console.log('Exactly');
        break;   
    case 5:
        console.log('Too Big');
        break;     
    default:
            console.log('I dont know such a value');

}
//Without break the switch statement
let b = 3+2;

switch (b) {
    case 3:
        console.log('To small');
        
    case 4:
        console.log('Exactly');
         
    case 5:
        console.log('Too Big');
           
    default:
            console.log('I dont know such a value');

}


//Switch statement
let dayName = 3;
switch(dayName){
    case 1:
       dayName = "Monday";
    break;
    case 2:
       dayName = "Tuesday";
    break;
    case 3:
       dayName = "Wednesday";
    break;
    case 4:
        dayName = "Thursday";
    break;
    case 5:
        dayName ="Friday";
    break;
    case 6:
        dayName = "Satruday";
    break;
    default:
        dayName ="Invalid day number";
        break;
}
console.log("The day is: " + dayName)


