function checkAnswer(respuestaUsuario, pregunta){
    if(pregunta.respuestaCorrecta == respuestaUsuario){
        return "Respuesta correcta"
    }
    else {
        return "Respuesta incorrecta"
    }
}

let pregunta = {
    id: 1,
    body: "De que color es el caballo blanco de San Martin",
    respuestaCorrecta: 2,
    respuestas: {
        opcion1: "Negro",
        opcion2: "Blanco",
        opcion3: "Gris",
        opcion4: "Marron"
    }
}

console.log(checkAnswer(2, pregunta))