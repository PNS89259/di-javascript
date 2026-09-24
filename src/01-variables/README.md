# 01 · Variables

## Ejercicio 1 · Declarar y reasignar con `let`

**Explicación.** Declaro `nombre` con `let` porque el ejercicio pide reasignarla
después; con `const` la segunda asignación daría `TypeError`.

```js
let nombre = "Hugo";
console.log(nombre);

nombre = "Déborah"
console.log(nombre);
```

```txt
Hugo
Déborah
```

## Ejercicio 2 · Constante `PI`

**Explicación.** Declaro la `const` PI en mayúscula para respetar la nomenclatura de que las constantes deben estar con ellas.

Le doy el valor indicado en su inicialización y en la siguiente línea se intenta cambiar su valor, dando el `TypeError` por intentar cambiar el valor a una constante.

Comento la línea que provoca el error y también dejo comentada la salida en consola.

```js
const PI = 3.1416;
// PI = 3; -> TypeError: Assignment to constant variable.
console.log(PI);
```

```txt
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
```

## Ejercicio 3 · Variable sin inicializar
**Explicación.** JavaScript permite tener datos sin ningún valor, llegado el caso éstos tendrán el valor `undefined` que es lo que vemos a simple vista con el código:

```js
let edad;
console.log(edad);

edad = 37;
console.log(edad);
```

```txt
undefined
37
```

Pero tenemos que aprender que éstos datos si quedan preparados para usarse y ya entran en memoria.

## Ejercicio 4 · Justificación entre `let` y `const`
**Explicación.** Aquí tenemos que aprender que no todo siempre va a ser normas estrictas. Debemos pensar la lógica de lo que vamos a escribir. 

En este caso el precio base se nos viene dado y lo usaremos en operaciones en las que no se va a modificar, por lo que lo declaramos como `const.`. De la misma manera, el IVA será un valor que no varía en los cálcular, también `const`. Y por último, el precio final es una opración que tampoco vamos a tocar en el código, así que otra `const`. Por lo tanto, vemos tres conceptos donde aplicar constantes.

```js
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
```

## Para pensar. Ejercicio 5 · Ámbitos
**Explicación.** Debemos conocer el alcance que realizan los ámbitos, que son los bloques de código que están limitados por las `{}`.

Entonces, para éste código:
```js
let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);
```

La x de la primera que está dentro de las `{}` tendrá valor 2 que se le da en su inicialización dentro del propio ámbito.

Para la x de la última línea, su valor será 1 que es el valor que se le da en la primera línea, y aunque el ámbito está en medio de ambas su ciclo de vida se acaba y no va afectar el valor que se dió dentro, por eso no afecta al valor inicial anterior.