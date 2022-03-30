// Input : the first display line on the screen
let input = document.getElementById("input")

// Input : the second display line on the screen
let output = document.getElementById("outputContainer")

function display(num){

    if(input.value.length > 6){
        input.style.fontSize = "48px";
    }
    
    if(input.value.length > 12){
        input.style.fontSize = "28px";
    }
    
    if(input.value.length > 20){
        input.value = "";
    }

    input.value += num;
 
    console.log(input.value.length); 
    
}

// Clear function called in AC button which clears the screen
function Clear(){
    input.value = "";
    output.innerText = "";
}

// Delete function called in <x| button which deletes the last entered character on the screen
// delete is a reserve word hence del is used as a function name
function del(){
    input.value = input.value.slice(0, -1);
}

// Calculation Function 
/* 
    function evaluates return the answer that is stored in outputValue which 
    is of type number and if any error occurs in the process it is caught in the catch block as Invalid
*/

function calculate(){
    try{
        
        let outputValue = eval(input.value);

        if(outputValue> Math.floor(100000 + Math.random() * 9000000000)){
            output.style.fontSize = "30px";
        }

        if(outputValue === Infinity){
            output.style.fontSize = "50px";
        }
        
        /* TODO
          - Here NaN comparision is not working So it should be fixed
        */ 
        if(outputValue != NaN){
            output.innerText = outputValue;  
        }

    }catch(err){
        input.value = "";
        output.innerText = "";
        alert("Invalid") 
    }
}