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

        