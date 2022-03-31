// Input : the first line on the screen
let input = document.getElementById("input")

// Output : the second line on the screen
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
function clearScreen(){
    input.value = "";
    output.innerText = "";
}

// Delete function called in <x| button which deletes the last entered character on the screen
function deleteCharacter(){
    input.value = input.value.slice(0, -1);
}

// Calculation Function 
/* 
    function evaluates return the answer which stored in outputValue of type number 
    and if any error occurs in the process it is caught in the catch block as Invalid
*/

function calculate(){
    try{
        
        let outputValue = eval(input.value);

        // Math Property is added to get 12 digits number
        if(outputValue> Math.floor(100000 + Math.random() * 9000000000)){
            output.style.fontSize = "30px";
        }

        // Checks whether outputValue is a number or not
        if(!Number.isNaN(outputValue)){
            output.innerText = outputValue;  
        }else{
            input.value = "";
            output.innerText = "";
            alert("Invalid")
        }

        // Infinity Font Size
        if(outputValue === Infinity){
            input.value = "";
            output.innerText = "";
            alert("Invalid")
        }

    }catch(err){
        input.value = "";
        output.innerText = "";
        alert("Invalid") 
    }
}