"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR
*/
document.getElementById(`boton1`).innerHTML = `PEGAR`
document.getElementById(`boton2`).innerHTML = `COPIAR`
document.getElementById(`boton3`).innerHTML = `CORTAR`

/*
2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"
*/
const botonesPorClase = document.querySelectorAll(`.btn`);
boton1.classList.add(`agua`);
boton2.classList.add(`agua`);
boton3.classList.add(`agua`);
