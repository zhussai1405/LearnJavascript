function maxCompareNumbers(val1, val2){

    if(val1 > val2){
        console.log("Value 1 is greater than value 2");
    }else{
        console.log("VAlue 2 is greater than value 1");
    }

}

console.log("Running javascript examples");

maxCompareNumbers(2,4);

maxCompareNumbers(7,4);

maxCompareNumbers(null,null);


    //String converted to a number
    function strToNumConvert (strNum){

        let numValue = Number(strNum);
        console.log(`The string ${strNum} converted to a number is ${numValue}`);
        }
        
        strToNumConvert("45");

        //number to string convert
        function numbertoString(number){
            let stringValue = number.toString();
            console.log(`The number ${number} converted to string is: "${stringValue}"`);
        }

        numbertoString(55);

       //boolean function check 
       function booleanCheck(value){
        if(value === true || value === false){
            return "The value is true"
        }else{
            return "The value is false"
        }
       } 
     console.log(booleanCheck(true,false));

     //Type conversion = change datatype of a value to another
     // (string , number , boolean)
     let age = 38;
     age += 1;
     console.log("Happy Birthday! You are",age, "years old.");

     //conversion values into string,number, boolean  
     let x;
     let y;
     let z;
     x = Number("3.14");    //conversion string into a number
     y = String(3.14);      //conversion number into a string
     z = Boolean("");       //Empty string into a boolean
     console.log(x, typeof x);
     console.log(y, typeof y);
     console.log(z, typeof z);




