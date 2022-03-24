var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./css/img/sun.png";
    }else{
        icon.src = "./css/img/moon.png";
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./css/img/sun.png";
    }
}