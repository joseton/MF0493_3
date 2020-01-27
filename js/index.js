

$(document).ready(function() {

    $menu = $('#menu').find('ul').find('li');

    $menu.hover(function() {
        $(this).children('ul').stop();
        $(this).children('ul').slideDown();
    }, function() {
        $(this).children('ul').stop();
        $(this).children('ul').slideUp();
    });

    $burguer = $('.burguer_menu').find('.lang').find('a');

    $burguer.click(function(){
        $(this).children('.lang').stop();
        $(this).children('.lang').slideDown();
    }, function() {
        $(this).children('.lang').stop();
        $(this).children('.lang').slideUp();
    });

});

function goToLogin(){
  window.location.href="login_reg.html";
  // var registre = document.getElementById("#registro");
  alert(registre.value);
  // var login = document.getElementById("#login");
  // login.style.display = "block";
  // registre.style.display = "none";
};
