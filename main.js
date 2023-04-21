const menu = document.getElementById("menu-b")

document.getElementById("collapce").addEventListener('click', abrirmenu)

function abrirmenu() {
    menu.style.display = "flex"
}

document.getElementById("close-collapce-button").addEventListener('click', cerrarMenu)

function cerrarMenu() {
    menu.style.display = "none"
}
var h

window.onload = function () {
    h = window.innerHeight
    h = (h) + "px"
    console.log(h)
    document.getElementById("head").style.height = h
    document.getElementById("card-form").style.height = h - (h * 0.6)
    document.getElementById("contain-btns").style.height = h - (h * 0.6)
}

function popUp(){
    console.log(h) 
}
