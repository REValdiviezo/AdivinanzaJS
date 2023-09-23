//Para seleccionar un numero al azar
let numeroAzar = Math.floor(Math.random()*100) + 1
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

const cheqResultado = () => {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, ingrése un número válido entre 1 y 100'
        mensaje.style.color = 'red';
        return
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado en numero!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Más alto! El numero es mayor al que dijiste';
        mensaje.style.color = 'red';
    }else {
        mensaje.textContent = '¡Más bajo! El numero es menor al que dijiste';
        mensaje.style.color = 'red';
    }
}
