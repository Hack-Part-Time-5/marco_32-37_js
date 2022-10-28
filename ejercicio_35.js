/* A partir de este array de números, ordena la secuencia en
forma creciente y luego filtra números menor de 10.
let num = [100, 2, 20, 35, 4, 44]; */

let num = [100, 2, 20, 35, 4, 44];

num.sort(function (a, b) {
    return a - b

    // orden descendente----
    // return b - a
});
console.log(num);