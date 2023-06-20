function convertToRoman(n){

    const numerosRomanos = [
      { valor: 1000, romano: "M" },
      { valor: 900, romano: "CM" },
      { valor: 500, romano: "D" },
      { valor: 400, romano: "CD" },
      { valor: 100, romano: "C" },
      { valor: 90, romano: "XC" },
      { valor: 50, romano: "L" },
      { valor: 40, romano: "XL" },
      { valor: 10, romano: "X" },
      { valor: 9, romano: "IX" },
      { valor: 5, romano: "V" },
      { valor: 4, romano: "IV" },
      { valor: 1, romano: "I" }
    ]

    let resultado = ""; // XV

    for(let i = 0; i < numerosRomanos.length; i++){
        while(n >= numerosRomanos[i].valor){
            resultado += numerosRomanos[i].romano
            n -= numerosRomanos[i].valor
        }
    }

    return resultado
}

const n = 25

console.log(`El numero ${n} en romano es: ${convertToRoman(n)}`)