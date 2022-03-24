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
    document.getElementById("output-value").innerText = num;

}

var equation = document.getElementsByClassName("input");

for(var i = 0; i< equation.length; i++){

    equation[i].addEventListener('click',function(){
        var expression = getFirstDisplay();
        
        console.log(expression.length);

        if(this.id=="clear"){
            printFirstDisplay("");
            printSecondDisplay("");
        }else if(this.id=="backspace"){
            var output = getFirstDisplay().toString();
            if(output){
            output = output.substring(0,output.length-1);
                printFirstDisplay(output);
            }   
        }else if(this.id =="equals"){
            var result = eval(expression);
            printSecondDisplay(result);
            printFirstDisplay("");
        }else if(expression.length < 7){
            expression=expression+this.id;
            printFirstDisplay(expression);
        }else{
            printFirstDisplay("Error")
            printSecondDisplay("");
        }
    })
    
}




