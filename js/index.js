$(document).ready(function(){

    $menu = $('#menu').find('ul').find('li');

    $menu.hover(function() {
       $(this).children('ul').stop();
       $(this).children('ul').slideDown();
    }, function() {
       $(this).children('ul').stop();
       $(this).children('ul').slideUp();
    });



});

//menus hamburguesa desplegable


function leyendas() {
    window.open("leyendas.html");
}

function resu() {
    window.open("resu.html");
}

// var toggle = true;
// function despliega (){
//     if(toggle){
//         $("nav").css("height","30%")
//         toggle = false;
//     } else {
//         $("nav").css("height","0");
//         toggle = true;
//     }
// }
