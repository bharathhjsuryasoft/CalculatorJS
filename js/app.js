let output = document.getElementById("outputContainer")

let input = document.getElementById("input")

function display(num){

    if(input.value.length > 6){
        document.getElementById("input").style.fontSize = "48px";
    }
    
    if(input.value.length > 12){
        document.getElementById("input").style.fontSize = "28px";
    }
    
    if(input.value.length > 20){
        input.value = "";
    }

    input.value += num;
    console.log(input.value.length); 
    
}

function clear(){
    input.value = "";
    document.getElementById("outputContainer").innerText = "";
}

function del(){
    input.value = input.value.slice(0, -1);
}

function calculate(){
    try{
        let outputValue = eval(input.value);
        
        if(outputValue>999999999999){
            document.getElementById("outputContainer").style.fontSize = "30px";
        }

        document.getElementById("outputContainer").innerText = outputValue;

    }catch(err){
        input.value = "";
        document.getElementById("outputContainer").innerText = "";
        alert("Invalid") 
    }
}




