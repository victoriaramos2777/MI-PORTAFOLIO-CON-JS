//constantes para el menu hamburguesa y enlaces de la nav
let menu = document.querySelector('#hamburg');
const enlacesMenu = document.querySelector('.enlaces-menu');

//evento escucha para agregar la aniamcion de los br 

menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
   
    if(menu.classList.contains("active")){
        enlacesMenu.classList.add('enlaces-menu');
    }else{
        enlacesMenu.classList.remove('enlaces-menu');
    }
})

