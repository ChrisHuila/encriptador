// Variables
const palabra = document.querySelector("#palabra");
const copiar = document.querySelector('#copiar');
// Encriptar
const encriptar = document.querySelector('#encriptar');
const encriptado = document.querySelector('#encriptado');
let claves = {
  a:"ai",
  o:"ober",
  e:"enter",
  i:"imes",
  u:"ufat",
};

// Desencriptar
const desencriptar = document.querySelector('#desencriptar');

let clavesDes = {
  ai:"a",
  ober:"o",
  enter:"e",
  imes:"i",
  ufat:"u",
};


// EventListener
cargarEvenListeners()
function cargarEvenListeners(){
  // Encripta la palabra
  encriptar.addEventListener('click', palabraEncriptar );
  // Desencripta la palabra
  desencriptar.addEventListener('click', palabraDesencriptar);
  // copia la palabra al portapapeles
  copiar.addEventListener('click', copiarPalabra );
}

// Funciones

// Copiar palabra
function copiarPalabra(){
  // Seleccionamos 
  encriptado.select();
  encriptado.setSelectionRange(0, 99999);
  // copiamos el texto
  let textoACopiar = encriptado.textContent;
  navigator.clipboard.writeText(textoACopiar);
}

// Encripta
function palabraEncriptar() {
  // Limpiar HTML
  encriptado.textContent = '';
  // Mostrar el spinner
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';
  //Despues de 1 segundos ocultar el spinner
  setTimeout(() => {
    spinner.style.display = 'none';
    // Encripta la palabra
    let pEncriptar = palabra.value;   
    //  Remplaza las letras por las claves
    pEncriptar = pEncriptar.replace(/a|e|i|o|u/g, (clave) =>
      claves[clave]
    );
    // Imprime en el HTML la palabra encriptada
    const munheco = document.querySelector('.characters-output');
    const encripOutPut = document.querySelector('.encriptado-output');
    encriptarHTML()
    function encriptarHTML() {
      // habilita el input
      if(palabra.value !== ''){
        munheco.style.display = 'none';
        encripOutPut.style.display = 'flex';
      }  
      if(palabra.value === ""){
        munheco.style.display = 'flex';
        encripOutPut.style.display = 'none';
      }    
      // Encripta la palabra
      encriptado.textContent = pEncriptar; 
    }

  }, 1500);
    
}
// Desencripta
function palabraDesencriptar(){
    // Limpiar HTML
    encriptado.textContent = '';
   // Mostrar el spinner
   const spinner = document.querySelector('#spinner');
   spinner.style.display = 'flex';
   //Despues de 2 segundos ocultar el spinner
   setTimeout(() => {
     spinner.style.display = 'none';
      // Desencripta la palabra
      let pDesencriptar = palabra.value;
      pDesencriptar = pDesencriptar.replace(/ai|ober|enter|imes|ufat/g, (clave) =>
      clavesDes[clave]
      );
      // Imprimimos en el HTML la palabra desencriptada
      const munheco = document.querySelector('.characters-output');
      const encripOutPut = document.querySelector('.encriptado-output');
        desencriptarHTML()
      function desencriptarHTML() {
        // habilita el input
        if(palabra.value !== ''){
          munheco.style.display = 'none';
          encripOutPut.style.display = 'flex';
        }
        if(palabra.value === ""){
          munheco.style.display = 'flex';
          encripOutPut.style.display = 'none';
        }    
        // Limpiamos el HTML
        encriptado.innerHTML = '';
        // Imprimimos la palabra
        encriptado.innerHTML = pDesencriptar;
      }
   }, 1500);

}


