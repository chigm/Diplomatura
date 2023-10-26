const items = document.getElementsByClassName('item');

function cambiarVisibilidad(){
    const item = items[1]; 

    if(item.style.visibility == '') {
        item.style.visibility = 'hidden' ;
    } else{
        item.style.visibility = ''
    }
}

setInterval(cambiarVisibilidad, 500);
// 500 es medio seg
//1000 segundo 
//setInterval > hace esto (la funcion cambiarVisibilidad en tiemo)