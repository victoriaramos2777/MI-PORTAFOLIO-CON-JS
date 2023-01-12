
//constantes para el menu hamburguesa y enlaces de la nav
const hamburg= document.querySelector('.hamburg');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.hamburg span');

//const para el efecto typing

//evento escucha para agregar la aniamcion de los br 

hamburg.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('active')});
    hamburg.classList.toggle('girar');

});

//const para llamar la form
const mainForm = document.getElementById("form");

mainForm.addEventListener( "submit" , (event) =>{
    event.preventDefault();
    let validNombre = document.getElementById('nombre').value;
    let validCorreo = document.getElementById('enviar').value;
    let validMensaje = document.getElementById('tema').value;
    let validTextarea = document.getElementById('mensaje').value;

    if (validNombre) {
        console.dir(mainForm);
    }
    
});

document.getElementById('submit').addEventListener('click', () => {
    mainForm.submit();
})

function validarForm(e){
    e.preventDefault();
    let name = document.getElementById("mensaje").value;
    if (name.length === 0) {
       alert('No ha escrito nada') ;
       return;
    }
    
} 
     

let confirCorreo= /\S+@\S+\.\S+/
confirCorreo.test('prueba@correo.com');
