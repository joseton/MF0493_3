$(document).ready(function() {

    $menu = $('#menu').find('ul').find('li');

    $menu.hover(function() {
        $(this).children('ul').stop();
        $(this).children('ul').slideDown();
    }, function() {
        $(this).children('ul').stop();
        $(this).children('ul').slideUp();
    });

    $burguer = $('.burguer_menu').find('.lang');

    $burguer.click(function(){
        $(this).children('.lang').stop();
        $(this).children('.lang').slideDown();
    }, function() {
        $(this).children('.lang').stop();
        $(this).children('.lang').slideUp();
    });
});
