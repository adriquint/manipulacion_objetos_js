"use strict";

const send = document.getElementById('send')
const reload = document.getElementById('reload')
const puntaje = document.getElementById("puntaje")

reload.onclick = () => restart()

send.onclick = () => {
  input.onchange = () => resultado()
  sessionStorage.setItem("acertados", cantidadAcertados),
  sessionStorage.setItem("encuestados", cantidadEncuestados) 
} 

let acertadosGet = sessionStorage.getItem("acertados")
let encuestadosGet = sessionStorage.getItem("encuestados")