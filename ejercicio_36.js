/* Devuelve las dos edades más altas dado una matriz de
números que representen edades. */


function dosEdadesMasAltas(array){ 
    // retornamos el metodo sort del argumento array. Luego los argumentos de la funcion sort son a, b, (digamos que para que ordene el array del punto a al punto b), y si le pasamos b - a, en lugar de a - b, nos lo hara en orden descendente. 
    // Aqui el resultado: [80, 55, 22, 19, 12, 10, 8, 6, 4, 3, 2, 1].

    // A continuacion le ponemos el metodo slice para que nos recorte los valores que le indiquemos segun el indice que pongamos, en este caso del 0 al 2, lo que seran los dos primeros valores
    // Aqui el resultado: [80, 55].
    return array.sort((a, b) => b - a).slice(0, 2)
}
console.log(dosEdadesMasAltas([1, 2, 10, 8, 22, 3, 6, 12, 80, 4, 55, 19])) 

