let bg = document.getElementById("background")
let btn1 = document.getElementById("charpc")
let btn2 = document.getElementById("charnpc")
let backbtn = document.getElementById("backbtn2")

let hover1 = function(){
    bg.style.backgroundImage = "url(../images/characters_1.png), url(../images/characters.png)"
}
let hover2 = function(){
    bg.style.backgroundImage = "url(../images/characters_2.png), url(../images/characters.png)"
}

let leave = function(){
    bg.style.backgroundImage = "url(../images/characters.png), url(../images/characters_1.png), url(../images/characters_2.png)"
}

btn1.addEventListener("mouseover", hover1)
btn1.addEventListener("mouseleave", leave)
btn2.addEventListener("mouseover", hover2)
btn2.addEventListener("mouseleave", leave)

btn1.onclick = function(){
    window.location.href = "/characters/playable.html"
}
btn2.onclick = function(){
    window.location.href = "/characters/npc.html"
}
backbtn.onclick = function(){
    window.location.href = "/menu.html"
}