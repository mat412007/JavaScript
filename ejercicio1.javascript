function power(x, n){
    let result = 1;
    while(n > 0){
        result *= x;
        n--;
    }
    return result; //Otra forma más simple de hacerlo es con x**n
}
console.log(power(2, 5)) // Imprimiría 32 = 2*2*2*2*2