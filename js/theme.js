var icon = document.getElementById("icon");
var clear = document.getElementById("clear");
var modulus = document.getElementById("modulus");
var division = document.getElementById("division");
var multiplication = document.getElementById("multiplication");
var subtraction = document.getElementById("subtraction");
var addition = document.getElementById("addition");
var equals = document.getElementById("equals");
var ce = document.getElementById("del");
var dot = document.getElementById("dot");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./css/img/sun.png";
        modulus.src = "./css/img/Vectors/mod_white.svg"
        division.src = "./css/img/Vectors/div_white.svg"
        multiplication.src = "./css/img/Vectors/mul_white.svg"
        subtraction.src = "./css/img/Vectors/sub_white.svg"
        addition.src = "./css/img/Vectors/add_white.svg"
        equals.src = "./css/img/Vectors/equals_white.svg"
        ce.src = "./css/img/Vectors/ce_white.svg"
        dot.src = "./css/img/Vectors/dot_white.svg"
    }else{
        icon.src = "./css/img/moon.png";
        modulus.src = "./css/img/Vectors/mod_dark.svg";
        division.src = "./css/img/Vectors/div_dark.svg";
        multiplication.src = "./css/img/Vectors/mul_dark.svg";
        subtraction.src = "./css/img/Vectors/sub_dark.svg";
        addition.src = "./css/img/Vectors/add_dark.svg";
        equals.src = "./css/img/Vectors/equals_dark.svg";
        ce.src = "./css/img/Vectors/ce_dark.svg";
        dot.src = "./css/img/Vectors/dot_dark.svg";
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./css/img/sun.png";
        modulus.src = "./css/img/Vectors/mod_white.svg"
        division.src = "./css/img/Vectors/div_white.svg"
        multiplication.src = "./css/img/Vectors/mul_white.svg"
        subtraction.src = "./css/img/Vectors/sub_white.svg"
        addition.src = "./css/img/Vectors/add_white.svg"
        equals.src = "./css/img/Vectors/equals_white.svg"
        ce.src = "./css/img/Vectors/ce_white.svg"
        dot.src = "./css/img/Vectors/dot_white.svg"
    }
}