/* A partir de un array, devuelve otro array con la elevación a
potencia de 3, para cada elemento del array inicial.
Ejemplo let pow = [2, 4, 25]; // [8, 64, 15625] */

let pow = [2, 4, 25]

let newPow = pow.map(n => Math.pow(n, 3))

console.log(newPow)



