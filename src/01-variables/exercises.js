// Ejercicios
// Básicos

/* 1. Declara con let una variable nombre y asígnale tu nombre. 
Muéstrala en consola, reasígnale otro nombre y vuelve a mostrarla.*/
console.log("Ejercicio 1:");
let nombre = "Hugo";
console.log(nombre);

nombre = "Déborah"
console.log(nombre);

/* 2. Declara una constante PI con el valor 3.1416. Intenta reasignarla, 
observa el error en consola y deja la línea comentada con el nombre 
del error que se produce.*/
console.log("\nEjercicio 2:");
const PI = 3.1416;
// PI = 3; -> TypeError: Assignment to constant variable.
console.log(PI);
/*
..\exercises.js:16
PI = 3;
   ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (..\exercises.js:16:4)
    at Module._compile (node:internal/modules/cjs/loader:1929:14)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
    at Module.load (node:internal/modules/cjs/loader:1651:32)
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47
*/

/* 3. Declara una variable edad sin valor y muéstrala. Asígnale después un 
número y muéstrala de nuevo.

Salida esperada:
undefined
25
*/
console.log("\nEjercicio 3:");
let edad;
console.log(edad);

edad = 37;
console.log(edad);

/* 4. Declara precioBase con valor 100, iva con 0.21 y calcula precioFinal. 
Decide para cada una si debe ser let o const y justifícalo en un 
comentario.
*/
console.log("\nEjercicio 4:");
/* Uso const uno por el valor fijo del enunciado, y dos porque si debiera
de cambiar por la lógica ya dependería de operaciones que no tengo que
pensar aquí. */
const precioBase = 100;
// Para el iva uso el const, si se usa no va a variar en la lógica
const iva = 0.21;
/* el precio final lo pongo const porque va ser una fórmula que usemos
a partir de las otras variables. */
const precioFinal = precioBase + (precioBase * iva);

console.log(`Precio final: ${precioFinal}`);