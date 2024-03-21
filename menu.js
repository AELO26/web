$(document).ready(main); //cuando el documento este listo vamos a ejecutar la funcion main

var contador = 1; //Si muestra variable cuenta uno esta acticvando menu 

function main() { //estamos creando la funcion main 
$('.menu_bar').click(function(){
    //$('nav').toggle();
    if(contador == 1){
        $('nav').animate({
        left: '0'
    });
    contador = 0;
}  else {
    contador = 1; 
    $('nav').animate({
        left: '100%'

    });
}
});
}
//el codigo javascript se va a cargar hasta que cargue nuestro sitio web