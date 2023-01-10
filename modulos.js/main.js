//constantes para el menu hamburguesa y enlaces de la nav
const menu = document.getElementById('hamburg');
const enlacesMenu = document.getElementById('enlaces-menu');

//evento escucha para agregar la aniamcion de los br 
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    if(menu === "active"){
       menu = "enlacesMenu".classList.toggle('enlaces-menu');
    }
    
    
    
});
