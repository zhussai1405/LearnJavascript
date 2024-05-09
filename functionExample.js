function message (text){
    console.log(text);
}

message('Hello');
message('This is a test');
message('World');
message(2+5);
message(5/2);
message(10-2);


function valCompare(x ,y){

if(x > y){
        return x;
    }else {
        return y;
    }

}

//valCompare(2 , 4);

console.log(valCompare(2 , 4));


function sum(a , b){
    console.log(a + b);
}

sum(50,50);

//Function with all DataType conversion 
//Boolean type conversion
function dataTypeConversion(value){

    let valueCompare = value;
    if("6" == 2){
        return true;
    }else{
        return false;
    }
    
}
console.log(dataTypeConversion("6"== 2));

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
    function strNum (){
    let strNum = "35";
    let numValue = Number(strNum);
    console.log(`The string "${strNum}" converted to a number is ${numValue}`);
    }
    
strNum();


//Number converted to a string
function numberString (){
    let number = 45;
    let stringValue = number.toString();
      console.log(`The number ${number} converted to a string is: "${stringValue}"`);
    }
    
numberString();



