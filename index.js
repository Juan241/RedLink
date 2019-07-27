var menu = document.getElementById("nav");
var boton = document.getElementById("btn-menu");

boton.addEventListener("click", ()=>{
    menu.classList.toggle("active");
});