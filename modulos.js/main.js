
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
const form = document.getElementById("form");



form.addEventListener( "submit" , (event) =>{
    event.preventDefault();

    document.write("<h1>Gracias por su mensaje</h1>");
    
    });

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("form").addEventListener('submit',validarForm);
});
function validarForm(e){
    e.preventDefault();
    let name = document.getElementById("mensaje").value;
    if (name.length === 0) {
       alert('No ha escrito nada') ;
       return;
    }
    
} 
    

let reCorto = /\S+@\S+\.\S+/
reCorto.test('prueba@correo.com');
