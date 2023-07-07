"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.// Tmb usar "hidden" porque sino queda a la vista

*/

const ingresar = document.getElementById("btnIngresar")
const usuario = document.getElementById("usuario")
const email =  document.getElementById("email")
const usuarioLogeado = document.getElementById("usuarioLogeado")
const emailLogeado = document.getElementById("emailLogeado")
const login = document.getElementById("login")
const logout = document.getElementById("logout")

ingresar.onclick = () => {
    console.log(`El usuario es: ${usuario.value}`);
    console.log(`El email es: ${email.value}`);
    localStorage.setItem("nombre del usuario", usuario.value)
    localStorage.setItem("email del usuario", email.value)
    usuarioLogeado.textContent = localStorage.getItem("nombre del usuario");
    emailLogeado.textContent = localStorage.getItem("email del usuario");
    login.classList.add("hidden"),
    logout.classList.remove("hidden")
}

/* 2 - Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).

*/

let usuarioStorage = localStorage.getItem("nombre del usuario")
let emailStorage = localStorage.getItem("email del usuario")

const datosStorage = (usuarioStorage, emailStorage) ? (
    usuarioLogeado.textContent = localStorage.getItem("nombre del usuario"),
    emailLogeado.textContent = localStorage.getItem("email del usuario"),
    login.classList.add("hidden"),
    logout.classList.remove("hidden")
) : (
    console.log("No hay usuarios en localStorage")
);

/*-- Paso 1 (funciona) --
const usuarioGuardado = (localStorage.getItem("nombre del usuario")) ? (
    usuarioLogeado.textContent = localStorage.getItem("nombre del usuario"),
    login.classList.add("hidden"),
    logout.classList.remove("hidden")
) : (
    console.log("No hay usuarios en localStorage")
);*/

/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/
const salir = document.getElementById("btnSalir")

salir.onclick = () => {
    localStorage.removeItem("nombre del usuario")
    localStorage.removeItem("email del usuario")
    location.reload()
}