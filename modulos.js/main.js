const menu= document.querySelector('.hamburg');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.hamburg span');



menu.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    menu.classList.toggle('girar');
});