/* Calcular la serie de fibonacci que devuelve hasta n números bajo forma de array. 
Ejemplo [1, 2, 3, 5, 8, 13, 21, 34]*/


let fibo = [1, 2]
console.log(fibo)

function fibonacci () {
    for(let i = 2; i <= 20; i++){
        // console.log(i)
        fibo.push(fibo[i -1] + fibo[i -2])

    }
    console.log(fibo)
}

fibonacci()
