/* A partir de este array de números, devolver un array con solo números pares:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// let newNumeros = []


/* for (const numero in numeros) {
    if (numero % 2 == 0) {
        newNumeros.push(numero)
        
    }
}

console.log(newNumeros) */


let newNumeros = numeros.filter(num => {
    if(num %2 ==0){
        return num
    }
})

console.log(newNumeros)