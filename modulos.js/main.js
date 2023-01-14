//constantes para el menu hamburguesa y enlaces de la nav
const hamburg = document.querySelector(".hamburg");
const enlaces = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".hamburg span");

//const para llamar la form
const form = document.getElementById("form");



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
    miRespuesta.innerHTML =`<p><span class="resp">Debes llenar todos los espacio!</span></p>`;
    
  }
  

  if (validarCorreo==enviar.value) {
    valido.innerHTML=`<p class="mi-alert">Por favor, escribe un correo electrónico válido!</p>`;
    //alert("escribe tu correo");


  }
 //Se pueden enviar los datos del formulario al servidor
}



);
