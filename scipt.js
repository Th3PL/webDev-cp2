document.getElementById("btn-padrao").addEventListener("click", function(){
    document.querySelector("body", "header", "div").setAttribute("class", "padrao");
})

document.getElementById("btn-dark").addEventListener("click", function(){
    document.querySelector("body", "*", "div").setAttribute("class", "dark");
})

document.getElementById("btn-green").addEventListener("click", function(){
    document.querySelector("body", "header", "div").setAttribute("class", "green");
})
