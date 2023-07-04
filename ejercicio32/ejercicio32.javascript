function generarNumeros() {
    // ParseInt -> Convierte de texto (string) a numero (entero)
    let n = parseInt(document.getElementById('n').value)
    let a = parseInt(document.getElementById('a').value)
    let b = parseInt(document.getElementById('b').value)

    if( a > b ){
        alert('Error: La A tiene que ser menor o igual a B')
        return;
    }

    // Creo un array vacio
    let numerosGenerados = []
    //  a   b
    // [5, 10]
    for(let i = 0; i < n; i++){         //      5 + 5 = 10 (maximo)
                                        //      0 + 5 = 5 (minimo)
                                        //    (10 - 5 + 1) + 5
        let numeroAleatorio = Math.floor(Math.random() * (b - a + 1) + a)
        numerosGenerados.push(numeroAleatorio)
    }

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = '<p>Lista de numeros generados: ' + numerosGenerados + '</p>' 

}

// Arrow function
const funcion = () => {

}
