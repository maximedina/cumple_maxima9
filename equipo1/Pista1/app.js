var tiempo;
var temporizador;

window.onload = function () {
  temp = localStorage.getItem("tiempo");
  if (temp != 0 && temp != null && !isNaN(temp)) {
    tiempo = temp;
    frm = document.forms["formulario"];
    for (i = 0; (ele = frm.elements[i]); i++) {
      ele.disabled = true;
    }
    temporizador = setInterval(habilitar, 1000);
  }
};
function seleccion() {
  if (document.formulario.opcion.value == "J") {
    document.getElementById("pista_nueva").style.display = "grid";
  } else {
    tiempo = 10;
    frm = document.forms["formulario"];
    for (i = 0; (ele = frm.elements[i]); i++) {
      ele.disabled = true;
    }
    timer = setInterval(habilitar, 1000);
  }
}

function habilitar() {
  tiempo--;
  localStorage.setItem("tiempo", tiempo);
  if (tiempo <= 0) {
    frm = document.forms["formulario"];
    for (i = 0; (ele = frm.elements[i]); i++) {
      ele.disabled = false;
    }
    clearInterval(temporizador);
  }
}