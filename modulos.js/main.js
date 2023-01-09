//constantes para el menu hamburguesa y enlaces de la nav
const menu= document.querySelector('.hamburg');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.hamburg span');


//evento escucha para agregar la aniamcion de los br 
menu.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    menu.classList.toggle('girar');
});