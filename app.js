//let titulo = document.querySelector('h1');
//titulo.innerHTML ='Juego del número secretito';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10, por favor';

let numeroSecreto=0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento,texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML =texto;
return;

}

function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  // si ya se sortearon todos los numeros
  if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

  } else{
    // Si el numero generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado))
    return generarNumeroSecreto();
    else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
  
}
}


function condicionesIniciales (){
  asignarTextoElemento('h1','Juego de numero secreto');
  asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos= 1;
  console.log(numeroSecreto);

}



function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   // console.log (typeof(numeroDeUsuario));
    console.log(intentos);
    //console.log(typeof(numeroSecreto));
   
    //console.log(numeroDeUsuario === numeroSecreto);

      if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
      } else {
      if (numeroDeUsuario > numeroSecreto){
          asignarTextoElemento('p','El número secreto es menor');

       } else {
           asignarTextoElemento('p','El número secreto es mayor'); 
       }
        intentos++;
        limpiarCaja();
      return;
      }
    }

function limpiarCaja(){
  document.querySelector('#valorUsuario').value='';
}

function ReiniciarJuego(){
  //limpiarcaja
  limpiarCaja();
  //indicarmensaje de inicio
  //Generar numero aleatorio
  condicionesIniciales();
  //Deshabilitar boton de reinicio
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
