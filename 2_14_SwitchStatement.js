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