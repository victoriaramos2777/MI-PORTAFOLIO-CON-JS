//constantes para el menu hamburguesa y enlaces de la nav
const hamburg = document.querySelector(".hamburg");
const enlaces = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".hamburg span");

//const para llamar la form
const form = document.getElementById("form");

//const para efecto  maquina de escribir 
const maquina1 = document.getElementById('maquina-escribir1');
const maquina2 = document.getElementById('maquina-escribir2');
const maquina3 = document.getElementById('maquina-escribir3');
const maquina4 = document.getElementById('maquina-escribir4');
const maquina5 = document.getElementById('maquina-escribir5');

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