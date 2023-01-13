
//constantes para el menu hamburguesa y enlaces de la nav
const hamburg= document.querySelector('.hamburg');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.hamburg span');

//const para llamar la form
const form = document.getElementById('form');

//const para el efecto typing

//evento escucha para agregar la aniamcion de los br 

hamburg.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('active')});
    hamburg.classList.toggle('girar');

});



form.addEventListener( "submit", (event) =>{
    event.preventDefault();
         let validarNombre = document.getElementById('nombre').value?true:false;
          let validarCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(document.getElementById('enviar').value);
         let  validarMensaje = document.getElementById('tema').value?true:false;
         let  validarTextarea = document.getElementById('mensaje').value?true:false;
    console.log(validarCorreo)
    if (validarNombre && validarCorreo && validarMensaje && validarTextarea) {
        console.log("entra");
        form.submit();
    }
   
   
});




