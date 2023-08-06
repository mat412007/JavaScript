function verificarPalindromo() {
    // Si la palabra tiene alguna mayuscula con toLowerCase() la convierto
    // a minuscula
    let palabra = document.getElementById('palabra').value.toLowerCase()
    
    let cantidadDigitos = palabra.length // Cantidad de letras de la palabra
    let esPalindromo = true

    /*
    Cuando uso [] -> Cuento desde 0
    Cuando uso .lenght -> Me devuelve la cantidad exacta
    ama (3 digitos)
    si (a != a)
    */

    for(let i = 0; i < cantidadDigitos; i++){
        if(palabra[i] != palabra[cantidadDigitos - 1 - i]){
            esPalindromo = false
            break
        }
        // palabra[0] = p
    }

    let resultado = document.getElementById('resultado')

    if(esPalindromo){
        resultado.innerText = "La palabra ingresada es un palindromo."
    }
    else {
        resultado.innerHTML = "La palabra ingresada no es un palindromo."
    }
}