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

// -----------------------------------------------------------------------------
/*
* @name: index
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: va a la pàgina principal
* @date: 24/01/20
* @params: none
* @return: none
*/
function index(){
    location.href = "index.html";
}

// -----------------------------------------------------------------------------
/*
* @name: cerca
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: va a la pàgina de cerca (pendent d'implementar)
* @date: 24/01/20
* @params: none
* @return: none
*/
function cerca(){
    location.href = "cerca.html";
}

// -----------------------------------------------------------------------------
/*
* @name: mostrar_login
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: va a la pàgina de login
* @date: 24/01/20
* @params: none
* @return: none
*/
function mostrar_login(){
    location.href = "login.html";
}
// -----------------------------------------------------------------------------
/*
* @name: fer_logout
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
