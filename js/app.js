const palabras = ["algo","hola","mundo"];
let palabra="";
let intentos = 5;
let indicePalabra=0;
const intentoElement = document.getElementById("intento");
const palabraElement = document.getElementById("palabra");
const mensajeElement = document.getElementById('mensaje');
const palabraEscritaElement = document.getElementById("palabraTipeado");

palabraEscritaElement.disabled=true;


document.getElementById('inicio').addEventListener('click', () => {
    //avilitamos el input para escribir las palabras del test
    palabraEscritaElement.disabled=false;
    intentos = 5;
    //de manera aleatoria se elije el indice del texto a mostrar
    const indicePalabra = Math.floor(Math.random() * palabras.length);
    // accedemos a nuestra matriz para opter el texto 
    const texto = palabras[indicePalabra];
    // separamos el texto en un array de palabras
    palabra = texto.split(' ');
    // reestablemos el idice de palabras para el seguimiento
    palabraIndice = 0;
  
    //hacemos que cada palabra sea un span para poder darle un class y asi resaltar
    const spanPalabras = palabra.map(function(palabra) { return `<span>${palabra} </span>`});

    intentoElement.innerHTML= `Tienes ${intentos} intentos para adivinar la palabra secreta`;

    palabraElement.innerHTML = `La palabra secreta tiene ${palabra[0].length} letras`;
    
    // Borramos los mensajes previos
    mensajeElement.innerText = '';
  
    // Vaciamos el elemento textbox
    palabraElement.value = '';
    // Definimos el foco en el elemento
    palabraElement.focus();
  });

  //agregamos un escuchador de evento al elemento input

palabraEscritaElement.addEventListener('input', () => {
    
    // tomamos la palabra actual
    const palabraActual = palabra[0];
    console.log(palabraActual);
    // tomamos el valor actual
    const palabraEscrita = palabraEscritaElement.value;
    console.log(palabraEscrita);
    // con esto controlamos si la palabra que acabamos de escribir es la ultima y en caso que no se mueve el puntero
    if (intentos >=1 ) {
        if (palabraEscrita.toLowerCase() === palabraActual && palabraIndice === palabra.length - 1) {
            //Tiempo es la constanilizacion de lo que se tardo en completar el test
            const mensaje = `FELICITACIONES! HAZ GANADO!!!`;
            //esto es para que al final quede vacio el imput
            palabraEscritaElement.value = '';
            //mostramos el mensaje de exito
            mensajeElement.innerText = mensaje;
    
            //desabilitamos el input al terminar 
            palabraEscritaElement.disabled=true;
    
            intentoElement.innerHTML="";
    
            //Escondemos el cuadro de texto
            palabraElement.innerHTML="";
            
            
            //logica para que al apretar espacio cambien de palabra
            // si palabraEscrita tiene un espacio al final y la palabra que se escribio es igual al de la muestra se cambia de palabra
        } else if (palabraEscrita.endsWith(' ') && palabraEscrita.trim() && palabraEscrita.toLowerCase() !== palabraActual) {
            intentos--;
            intentoElement.innerHTML= `Tienes ${intentos} intentos para adivinar la palabra secreta`;
            palabraEscritaElement.value="";
            palabraEscritaElement.className = '';
        }
    } else {
        palabraEscritaElement.disabled=true;
        palabraEscritaElement.value="";
        intentoElement.innerHTML="";
        palabraElement.innerHTML="";
        mensajeElement.innerHTML = "LO SIENTO HAZ PERDIDO";
    }
  });