





/* ¡Bienvenidos y Bienvenidas a nuestro primer desafío!

Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
Por fin, en la columna Concluido estarán los elementos ya concluidos.
El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

Buen proyecto! */


const palabra = document.querySelector("#palabra");
const encriptar = document.querySelector('#encriptar');
// let valores = ["a", "e", "i", "o", "u"];
let claves = {
    a:"ai",
    o:"ober",
    e:"enter",
    i:"imes",
    u:"ufat",
};

// palabra.addEventListener('input',(e) =>{console.log(e.target.value)});
encriptar.addEventListener('click', palabraEncriptar );

// encriptar.onclick = PalabraEncriptar; 
// palabra.addEventListener('input', palabraEncriptar);
// encriptar.onclick = palabraEncriptar;


function palabraEncriptar() {
    // console.log(palabra.value.replace('a', 'ai'))
    let pEncriptar = palabra.value; 
    // let pEncriptada;

    // pEncriptar = pEncriptar.replace(/a|e|i|o|u/g, function(clave){
    //   return claves[clave];
    // });
    pEncriptar = pEncriptar.replace(/a|e|i|o|u/g, (clave) =>
      claves[clave]
    );
    
        // if(pEncriptar.includes('a')) {
        //     pEncriptada = pEncriptar.replace(/a|e|i|o|u/g, );
        // }

      /*   if(pEncriptar.includes('e')) {
            pEncriptada = pEncriptar.replace(/e/g, 'enter');
                          
        } */

        // if(pEncriptada.includes('o')) {
        //     pEncriptada = pEncriptada.replace(/o/g, 'ober');
        //     // pEncriptada = pEncriptar.replace('o', 'ober');        
        // }

        // if(pEncriptada.includes('e')) {
        //     pEncriptada = pEncriptada.replace(/e/g, 'enter');
        //     // pEncriptada = pEncriptar.replace('o', 'ober');        
        // }
        
    
        console.log(pEncriptar);   
           
    
        
       
}

// var str = "gatote";
// var mapObj = {
//    a:"ai",
//    o:"ober",
//    e:"enter"
// };

// str = str.replace(/a|e|o/gi, function(matched){
//   return mapObj[matched];
// });
// console.log(str)


function palabraDesencriptar(){
  let pDesencriptar = encriptado.textContent;
  pDesencriptar = pDesencriptar.replace(/ai|ober|enter|imes|ufat/g, (clave) =>
  clavesDes[clave]
  );
  // Imprimimos en el HTML la palabra desencriptada
    desencriptarHTML()
  function desencriptarHTML() {
    // Limpiamos el HTML
    encriptado.textContent = '';
    // Imprimimos la palabra
    encriptado.textContent = pDesencriptar;
  }
  
  
}

copiar.addEventListener('click', () => {
  encriptado.select();
  encriptado.setSelectionRange(0, 99999);
  document.execCommand('copy'); 
});