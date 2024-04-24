function maxNumber(num1, num2) {
    if (num1 == null) {
      console.log('null value passed in for num1' + num1);
    } else {
      console.log('null value passed in for num2' + num2);
    }
    if (num1 == null) {                                 
        return true;
    }else{
        return false;
    }
}

console.log(maxNumber(45,null));                    //num1 45 not equal to null return null, or boolean return false

//string conversion 
let str = "456";
console.log(typeof str);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null === 0); //ture
console.log(undefined <= 0);  //true



//variable , variable name = variable value
let fullName = 'Rahim Hassan';
    age = '3';
    message = 'hello Rahim';
console.log(fullName);
console.log(age);
console.log(message);

//constant variable
const myBirthday ='08.05.1985';
console.log(myBirthday);

//string conversion 
let value = 'ture';
console.log('type of value in boolean: ' + value);

//string conversion 
let string = '123';
console.log('the type of value in stirng:' + string);

//Boolean in the result
console.log(5 > 4);
console.log(5 < 4);
console.log(5 == null);
console.log(null == 5);
console.log(undefined == 5);
console.log(5 == undefined);
console.log(5 != 4);

//string comparison wheather string is greater another 
console.log('R' > 'A');
console.log('A' > 'R');






