/* There are 2 display in Calculator Applications
    => First Display displays the operations or equation part,
    => Second Display displays the output part of the Calculator
*/
function getFirstDisplay(){
    return document.getElementById("operations-value").innerText;
}

function printFirstDisplay(num){
    document.getElementById("operations-value").innerText=num;
}

function getSecondDisplay(){
    return document.getElementById("output-value").innerText;
}

function printSecondDisplay(num){
    if(num == ""){
        document.getElementById("output-value").innerText = num;
    }else{
        document.getElementById("output-value").innerText= getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en"); 
    return value;
}

function removeNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");

for(var i = 0; i< operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printFirstDisplay("");
            printSecondDisplay("");
        }else if(this.id=="backspace"){
            var output = removeNumberFormat(getSecondDisplay()).toString();
            if(output){
                output = output.substring(0,output.length-1);
                printSecondDisplay(output);
            }
        }else{
            if(output!=""){
                var output = getSecondDisplay();
                var equation = getFirstDisplay();
                if(output==""&&equation!=""){
                    if(isNaN(equation[equation.length-1])){
                        equation= equation.substring(0,equation.length-1);
                    }
                }
                if(output!="" || equation!=""){
                    
                    output = output == "" ? output : removeNumberFormat(output);
                    equation = equation+output;
                    if(this.id=="="){
                        var result = eval(equation);
                        printSecondDisplay(result);
                        printFirstDisplay("");
                    }else{
                        equation=equation+this.id;
                        printFirstDisplay(equation);
                        printSecondDisplay("");
                    }
                }
            }
        }

    });
}

var number = document.getElementsByClassName("number");
for(var i = 0; i< number.length; i++){
    number[i].addEventListener('click',function(){
        var output = removeNumberFormat(getSecondDisplay());
        if(output!=NaN && output < 999999){ //check if output is a number and it does'nt exceed screen limit
            output=output+this.id;
            printSecondDisplay(output);
        }
    })
}


 