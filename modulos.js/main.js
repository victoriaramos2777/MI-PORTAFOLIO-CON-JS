//constantes para el menu hamburguesa y enlaces de la nav
const hamburg = document.querySelector(".hamburg");
const enlaces = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".hamburg span");

//const para llamar la form
const form = document.getElementById("form");

//const para efecto  maquina de escribir 
const maquina1 = document.getElementById('escribir1');
const maquina2 = document.getElementById('escribir2');
const maquina3 = document.getElementById('escribir3');
const maquina4 = document.getElementById('escribir4');

//evento escucha para agregar la aniamcion de los br

hamburg.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
  barras.forEach((child) => {
    child.classList.toggle("active");
  });
  hamburg.classList.toggle("girar");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let validarNombre = document.getElementById("nombre").value ? true : false;
  let validarCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(
    document.getElementById("enviar").value
  );
  let validarMensaje = document.getElementById("tema").value ? true : false;
  let validarTextarea = document.getElementById("mensaje").value;
  let miRespuesta = document.getElementById("mensajeRespuesta");
  let valido = document.getElementById("alert-correo");
  if (validarNombre && validarCorreo && validarMensaje && validarTextarea) {
    
      form.submit()
  }
  if (
    validarCorreo.length === 0 ||
    validarMensaje.length === 0 ||
    validarNombre.length === 0 ||
    validarTextarea.length === 0
  ) {
    miRespuesta.innerText ="Debes llenar todos los espacio!";
    
  }
  

  if (validarCorreo==enviar.value) {
    valido.innerText="Por favor, escribe un correo electrónico válido!";
    

  }
  
 //Se pueden enviar los datos del formulario al servidor
}

);


// funciones para el efecto maquina 

const maquinaEscribir1 = (text = '',tiempo = 300, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let cont = 0
  let escribir = setInterval(function(){
    etiqueta.innerHTML += arrayCaracteres[cont]
    cont++
    if (cont === arrayCaracteres.length) {
      clearInterval(escribir)
    }
  }, tiempo)
}

maquinaEscribir1("Bienvenidos",100, maquina1);

const maquinaEscribir2 = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let cont = 0
  let escribir = setInterval(function(){
    etiqueta.innerHTML += arrayCaracteres[cont]
    cont++
    if (cont === arrayCaracteres.length) {
      clearInterval(escribir)
    }
  }, tiempo)
}
maquinaEscribir2(" Desarrolladora Web Front End.",100, maquina2)

const maquinaEscribir3 = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let cont = 0
  
  let escribir = setInterval(function(){
    etiqueta.innerHTML += arrayCaracteres[cont]
    cont++
    if (cont === arrayCaracteres.length) {
      clearInterval(escribir)
    }
  }, tiempo)
}

maquinaEscribir3(" Victoria Ramos",100, maquina3);

const maquinaEscribir4 = (text = '',tiempo = 100, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let cont = 0
  let escribir = setInterval(function(){
    etiqueta.innerHTML += arrayCaracteres[cont]
    cont++
    if (cont === arrayCaracteres.length) {
      clearInterval(escribir)
    }
  }, tiempo)
}

maquinaEscribir4(" Me gusta programar y dar vida a las ideas en el navegador.  ",100, maquina4);
