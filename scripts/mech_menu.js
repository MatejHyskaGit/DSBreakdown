let bg = document.getElementById("background")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let backbtn = document.getElementById("backbtn")

let hover1 = function(){
    bg.style.backgroundImage = "url(../images/mech_1.png), url(../images/mech_menu.png)"
}
let hover2 = function(){
    bg.style.backgroundImage = "url(../images/mech_2.png), url(../images/mech_menu.png)"
}
let hover3 = function(){
    bg.style.backgroundImage = "url(../images/mech_3.png), url(../images/mech_menu.png)"
}

let leave = function(){
    bg.style.backgroundImage = "url(../images/mech_menu.png), url(../images/mech_1.png), url(../images/mech_2.png), url(../images/mech_3.png)"
}

btn1.addEventListener("mouseover", hover1)
btn1.addEventListener("mouseleave", leave)
btn2.addEventListener("mouseover", hover2)
btn2.addEventListener("mouseleave", leave)
btn3.addEventListener("mouseover", hover3)
btn3.addEventListener("mouseleave", leave)

btn1.onclick = function(){
    window.location.href = "/mechanics/survival.html"
}
btn2.onclick = function(){
    window.location.href = "/mechanics/interaction.html"
}
btn3.onclick = function(){
    window.location.href = "/mechanics/world.html"
}
backbtn.onclick = function(){
    window.location.href = "/menu.html"
}


