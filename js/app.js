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

// Delete function called in <x| button which deletes the last enterd character on the screen
function del(){
    input.value = input.value.slice(0, -1);
}

// Calculation Function 
function calculate(){
    try{

        /* 
           eval function Converts a string to an integer evaluates it 
           and provides the answer that is stored in outputValue which 
           is of type number and if any error occurs in this eval it 
           is caught in the catch block as Invalid
        */
        let outputValue = eval(input.value);

        if(outputValue>999999999999){
            output.style.fontSize = "30px";
        }

        if(outputValue === Infinity){
            output.style.fontSize = "50px";
        }

        if(outputValue === Infinity){
            output.style.fontSize = "50px";
            output.innerText = "Error";
        }
        
        if(outputValue !== NaN){
            console.log(outputValue);
            console.log(typeof(outputValue));
            output.innerText = outputValue;  
        }

    }catch(err){
        input.value = "";
        output.innerText = "";
        alert("Invalid") 
    }
}




