const cajaReloj = document.getElementById('reloj')

/*Con setInteval puedo ejecutar una función cada cierto tiempo
en este caso cada un segundo actualizo el reloj. */

setInterval(function obtenerHora(){
    cajaReloj.innerHTML = `Reloj: ${new Date()}`
}, 1000) // 1000ms = 1segundo
