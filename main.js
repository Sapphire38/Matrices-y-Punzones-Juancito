document.getElementById("collapce").addEventListener('click', abrirmenu)

function abrirmenu(){
    document.getElementById("menu-b").style.display="flex"
}

document.getElementById("close-collapce-button").addEventListener('click', cerrarMenu)

function cerrarMenu(){
    document.getElementById("menu-b").style.display="none"
}
var h 

window.onload = function (){
     h = window.innerHeight
     h = (h) +"px"
     console.log(h)
     document.getElementById("head").style.height = h
     document.getElementById("card-form").style.height = h - (h * 0.2)
    }

