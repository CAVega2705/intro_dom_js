"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

1)
Leer el título del "header" del post e imprimirlo en consola.   
*/
const tituloHeader = document.querySelector (".post-header")
console.log(tituloHeader.textContent)
/*
2)
Cambiar título utilizando javascript por otro cualquiera.
*/
tituloHeader.textContent = `Nuevo Título`
console.log(tituloHeader.textContent)