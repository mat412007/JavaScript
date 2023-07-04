function power(x, n){
    let result = 1;
    while(n > 0){
        result *= x;
        n--;
    }
    return result;
}
console.log(power(2, 3)) // Imprimiría 8