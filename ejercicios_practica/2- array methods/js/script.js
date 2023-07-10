"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar (traer??) los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/

localStorage.setItem("personasEnJSON", personasJSON)
console.log(localStorage.getItem("personasEnJSON"))

const personas = JSON.parse(localStorage.getItem("personasEnJSON"))
console.log(personas)

const personasFiltradas = personas.filter(persona => {
    return persona.edad >= 18
});
console.log(personasFiltradas)

/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/
   
let accumulator = ""
    personasFiltradas.forEach(persona => {
        accumulator += `
        <article>           
            <h3> ${persona.nombre} es mayor de edad. Tiene ${persona.edad} años.</h3>
        </article>
        `;
    })

    const enunciado2 = document.getElementById("enunciado2");
    console.log(enunciado2)
    enunciado2.innerHTML = accumulator;

/* 3 - BONUS TRACK

- Su misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/

const enviar = document.getElementById("btnEnviar")
const edad = document.getElementById("edad")
const enunciado3 = document.getElementById("enunciado3");
//const edadesIngresadas = [""]
//const input = document.getElementById("input")

enviar.onclick = () => {
    localStorage.setItem("edad ingresada", edad.value);
    const edadesEnLocal = localStorage.getItem("edad ingresada")
    console.log(`La edad ingresada es: ${edadesEnLocal}`)
    //edadesIngresadas.push(edad.value)
    //console.log(edadesIngresadas)

    /*const edadFiltrada = edadesEnLocal.filter( edad => {
        return edad.value >= 18
    });
    console.log(edadFiltrada)*/
    
    let accumulator = ""
    edad.value >= 18 ? (
        accumulator += `
        <article>           
            <h4>La edad ingresada es: ${edad.value} años</h4>
            <h4>Usted es mayor de edad</h4>
        </article>
        `,
        enunciado3.innerHTML = accumulator
    ) : (
        accumulator += `
        <article>           
            <h4> La edad ingresada es: ${edad.value} años</h4>
            <h4> Usted es menor de edad</h4>
        </article>
        `,
        enunciado3.innerHTML = accumulator
    )
}