let bg = document.getElementById("background")
let mech = document.getElementById("mech")
let chars = document.getElementById("chars")
let design = document.getElementById("design")
let dlcs = document.getElementById("dlcs")

let hover1 = function(){
    bg.style.backgroundImage = "url(../images/menu_1.png), url(../images/menu.png)"
}
let hover2 = function(){
    bg.style.backgroundImage = "url(../images/menu_2.png), url(../images/menu.png)"
}
let hover3 = function(){
    bg.style.backgroundImage = "url(../images/menu_3.png), url(../images/menu.png)"
}
let hover4 = function(){
    bg.style.backgroundImage = "url(../images/menu_4.png), url(../images/menu.png)"
}

let leave = function(){
    bg.style.backgroundImage = "url(../images/menu.png), url(../images/menu_1.png), url(../images/menu_2.png), url(../images/menu_3.png), url(../images/menu_4.png)"
}

mech.addEventListener("mouseover", hover1)
mech.addEventListener("mouseleave", leave)
chars.addEventListener("mouseover", hover2)
chars.addEventListener("mouseleave", leave)
design.addEventListener("mouseover", hover3)
design.addEventListener("mouseleave", leave)
dlcs.addEventListener("mouseover", hover4)
dlcs.addEventListener("mouseleave", leave)


mech.onclick = function(){
    window.location.href = "/mechanics/menu.html"
}
chars.onclick = function(){
    window.location.href = "/characters/index.html"
}
design.onclick = function(){
    window.location.href = "/design/index.html"
}
dlcs.onclick = function(){
    window.location.href = "/dlcs/index.html"
}

