$(document).ready(function() {
    $menu = $('.menu');

    $menu.hover(function(){
        $(this).children('ul').stop();
        $(this).children('ul').slideDown();
    }, function(){
        $(this).children('ul').stop();
        $(this).children('ul').slideUp();
    });
});

function index(){
    location.href = "index.html";
}

function cerca(){
    location.href = "cerca.html";
}

function mostrar_login(){
    location.href = "login.html";
}
// -----------------------------------------------------------------------------
/*
* @name: logout
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: simulació de logout (canvia la icona de la part superior dreta)
* @date: 24/01/20
* @params: none
* @return: none
*/
function fer_logout(){
    $("#login").show();
    $("#logout").hide();
    location.href = "index.html";
}
