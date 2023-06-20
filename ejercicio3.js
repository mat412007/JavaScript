function calcularOmhs(color1, color2, multiplicador) {
    const colores = ["negro", "marron", "rojo", "naranja", "amarillo", "verde", "azul", "violeta", "gris", "blanco"]

    const valor1 = colores.indexOf(color1);
    const valor2 = colores.indexOf(color2);
    const multiplicadorEnNumero = colores.indexOf(multiplicador)
    // Usamos parseInt para convertir de string a int
    const resistencia = parseInt(`${valor1}${valor2}`) * Math.pow(10, multiplicadorEnNumero);
    /*
    let texto = "Hola" + valor1
    let textoConTemplateString = `Hola ${valor1}` 
    */
    return resistencia
}

const resistencia = calcularOmhs("marron", "rojo", "naranja")
console.log(`El valor de la resistencia es: ${resistencia} Omhs`)