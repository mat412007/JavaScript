function isLeap(year) {
    let resultado = ""
    if(year % 4 == 0 && year % 100 != 0){
        resultado = "es bisiesto."
    }
    else if(year % 400 == 0){
        resultado = "es bisiesto."
    }
    else {
        resultado =  "no es bisiesto."
    }
    return resultado;
}

let year = 2001;
console.log(`El año ${year} ` + isLeap(2001)); //Debes ingresar el año correcto en year y console.log para que el resultado sea correcto.