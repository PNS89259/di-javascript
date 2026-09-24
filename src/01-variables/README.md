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

En este caso el precio base se nos viene dado y lo usaremos en operaciones en las que no se va a modificar, por lo que lo declaramos como `const`. De la misma manera, el IVA será un valor que no varía en los calculos, también `const`. Y por último, el precio final es una opración que tampoco vamos a tocar en el código, así que otra `const`. Por lo tanto, vemos tres conceptos donde aplicar constantes.

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

Para la x de la última línea, su valor será 1 que es el valor que se le da en la primera línea, y aunque el ámbito que está en medio de ambas su ciclo de vida se acaba y no va afectar el valor que se le dió dentro, por eso no afecta al valor inicial anterior.

## Para pensar. Ejercicio 6 · Referencia
**Explicación.** Aquí tocamos el concepto de referencia y lo que sucede en la memoria.
```js
const lista = [1, 2];
lista.push(3);
console.log(lista);
lista = [];
```

El array de la primera línea lo declaramos como constante, y el array se guarda como referencia, que es un enlace en la memoria, y será éste enlace lo que será inmutable. Dicho ésto, lo que sucede en las líneas 2 y 3 es algo que sí podemos hacer, ya que el contenido del array sí puede ser modificado porque no modifica el enlace que mencionamos, sólo su contenido.

Ahora, la última línea si está intentando modificar la referencia, el enlace a la memoria, y como es una constante y es inmutable nos saltará error.

## Para pensar. Ejercicio 7 · Nombre variables y CamelCase
**Explicación.** Para que un código sea entendible tenemos que ser específicos con los nombres de las variables y olvidarnos lo de querer ahorrar líneas sacrificando el acortar código. debemos pensar que es muy raro que trabajemos solos en proyectos, y nuestro código será leído por más personas, por lo que tiene que quedar claro qué es cada cosa.

Eso no nos quita de que escribamos como nos dé la gana, existen convenciones para nombrar variables, clases, proyectos, nombres de archivos... Las variables las trabajaremos con CamelCase, que es el formato donde la variable empezará en minúscula y si es una palabra compuesta por dos o más éstas se unirán empezando por su primera letra en mayúscula a la variable.

Para el ejemplo del ejercicio, me he basado en los datos que tendría una empresa sobre sus empleados, comparemos las diferencias:
```js
let a = "Ana";
let b = 30;
let c = true;
let d = 1250.5;
```

```js
let nombreEmpleado = "Ana";
let edadEmpleado= 30;
let deBaja = true;
let salarioBase = 1250.5;
```

## Reto. Ejercicio 8 · Diferencia ámbito de `var` contra `let`
**Explicación.** Cuando usamos `var`, que ya queda anticuado y no debemos recomendar su uso, su salida será `3 3 3`, esto sucede porque `var` siemrpe tendrá un ámbito global dando igual que lo cerremos en ámbitos o bloques de `{}`, así que en éste caso con el `setTimeout` que retrasa la salida, lee el valor final de i que es 3 (última comprobación) y por eso sacará lo que hemos mencionado.
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
} // Salida: 3 3 3
```

Con `let`, que si tiene ámbito de bloque, si se guardará en memoria el valor en cada vuelta del bucle (iteración) y la salida será `0 1 2` y por ello sí conservará su valor cuando se muestre.
```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}  // Salida: 0 1 2
```