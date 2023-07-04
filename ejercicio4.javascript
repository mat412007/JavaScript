function fibonacci(n) {

    const resultadoFibonacci = [0, 1];

    for (let i = 2; i < n; i++){
        const num = resultadoFibonacci[i - 1] + resultadoFibonacci[i - 2]
        resultadoFibonacci.push(num)
    }

    // Slice me devuelve los valores en una seccion del array
    // El primer argumento (en este caso 0) es el comienzo de la seccion
    // y el segundo argumento (en este caso n) es el final de la seccion
    return resultadoFibonacci.slice(0, n)
}

const n = 10;
const resultado = fibonacci(n)
console.log("Los primeros " + n + " numeros de fibonacci son: " + resultado);