function message (text){
    console.log(text);
}

message('Hello');
message('This is a test');
message('World');
message(2+5);
message(5/2);
message(10-2);


function valCompareNumberMax(x ,y){

if(x > y){
        return x;
    }else {
        return y;
    }

}

//valCompare(2 , 4);

console.log(valCompareNumberMax(2 , 4));


function sumofTwoNumbers(a , b){
    console.log(a + b);
}

sumofTwoNumbers(50,50);

//Function with all DataType conversion 
//Boolean type conversion
function booleanTypeConversion(value){

    let valueCompare = value;
    if("6" == 2){
        return true;
    }else{
        return false;
    }
    
}
console.log(booleanTypeConversion("6"== 2));

function isGreater(){
let isGreater = ("6", 2);
    if("6" > 2){
        return true;
    }else{
        return false;
    }
}

    console.log(isGreater("6",2));

    function valueCompare(){
        if(null == 0){
            return true;
        }else{
            return false;
        }
    }

    console.log(valueCompare(null == 0));


    //String converted to a number
    function strToNumConvert (strNum){
    //let strNum = "35";
    let numValue = Number(strNum);
    console.log(`The string "${strNum}" converted to a number is ${numValue}`);
    }
    
    strToNumConvert();


//Number converted to a string
function numbertoString (){
    let number = 45;
    let stringValue = number.toString();
      console.log(`The number ${number} converted to a string is: "${stringValue}"`);
    }
    
numbertoString();

//compare two of the greater numbers
function compareisGreaterNum(x,y){
    if(x > y){
        return true;
    }else{
        return false;
    }

    }
console.log(compareisGreaterNum(4,3));

//function comparison with null value
function equalCompare() {
        return 0 == null;
    }
    
    console.log(equalCompare());

//function comparison with undefined
function compValue(){
    return null == undefined;
    
}
console.log(compValue());

//comparison for check different types 
console.log("2" > 1);       //2 converts into number 2 > 1 : true
console.log("02" > 1);      //02 converts into number 02 > 1: true
console.log(null > 0);      //null is not a number so it cant be > then 0 : false
console.log(null == 0);     //null is not a number so it not equal to 0: false
console.log(null >= 0);     //Comparison converts null to a number
console.log(null == undefined); //null is equal to undefined :
console.log(null === undefined);    
