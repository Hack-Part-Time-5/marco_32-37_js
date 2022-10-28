/* A partir de estos días filtrar los días que empiezan por "m": 
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes',
'sabado', 'domingo']*/

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes',
'sabado', 'domingo']


// Dias que contienen la m. ---------------------------------

// let diasM = dias.filter(m => m.includes('m'))

// console.log(diasM)


// Dias que empiezan por m ---------------------------------

// let diasStarM = dias.filter(m => m.startsWith('m'))

// console.log(diasStarM)


// Otra opcion que empiezan por m -------------------------

let diasComM = dias.filter(m => m.indexOf('m') === 0)

console.log(diasComM)