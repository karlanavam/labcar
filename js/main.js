var btnIniciarSesion = document.getElementById("iniciarSesion");

var modal = document.getElementsByClassName("modal");

btnIniciarSesion.addEventListener(click, modalUno);

function modalUno () {
  modal.style.display = "block";  
} 