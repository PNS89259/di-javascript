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