//constantes para el menu hamburguesa y enlaces de la nav
const menu = document.getElementById('hamburg');


//evento escucha para agregar la aniamcion de los br 
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    
});   