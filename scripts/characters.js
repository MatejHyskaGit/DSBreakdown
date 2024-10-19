let bg = document.getElementById("background")
let btn1 = document.getElementById("charpc")
let btn2 = document.getElementById("charnpc")
let backbtn = document.getElementById("backbtn")

let hover1 = function(){
    bg.style.backgroundImage = "url(../images/characters_1.png), url(../images/mech_menu.png)"
}
let hover2 = function(){
    bg.style.backgroundImage = "url(../images/characters_2.png), url(../images/mech_menu.png)"
}

let leave = function(){
    bg.style.backgroundImage = "url(../images/characters.png), url(../images/characters_1.png), url(../images/characters_2.png)"
}

btn1.addEventListener("mouseover", hover1)
btn1.addEventListener("mouseleave", leave)
btn2.addEventListener("mouseover", hover2)
btn2.addEventListener("mouseleave", leave)