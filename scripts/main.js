let btn = document.getElementById("btn")
let text = document.getElementById("text")

let btnmain = document.getElementById("btnmain")

if(btnmain != undefined){
    btnmain.onclick = function(){
        window.location.href = "facts/index.html"
    }
}


let btnback = document.getElementById("btnback")

if(btnback != undefined){
    btnback.onclick = function(){
        window.location.href = "/index.html"
    }
}