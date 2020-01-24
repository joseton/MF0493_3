$(document).ready(function() {
    $menu = $('.menu');

    $menu.hover(function(){
        // alert($(this).find('li').find('ul').html());
        $(this).children('ul').stop();
        $(this).children('ul').slideDown();
        // $('ul.menu-link').stop();
        // $('ul.menu-link').slideDown();
    }, function(){
        $(this).children('ul').stop();
        $(this).children('ul').slideUp();
    });
});

// <nav id="menu">
//         <ul>
//             <li> $menu aquí
//             <a href="#">LINK1</a>
//                 <ul> efectes aquí
//                     <li><a href="#">Sublink1.</a></li>
//                     <li><a href="#">Sublink2.</a></li>
//                     <li><a href="#">Sublink3.</a></li>
//                 </ul>
//             </li>
//         </ul>
//     </nav>
// <ul>
//     <li class="menu"> $menu aquí
//         <a class="menu-boto" href="#">Receptes</a>
//         <ul class="menu-desp"> efectes aquí
//             <li><a href="#">Arrossos</a></li>
// $menu = $('#menu').find('ul').find('li');
//
//     $menu.hover(function() {
//         $(this).children('ul').stop();
//         $(this).children('ul').slideDown();
//     }, function() {
//         $(this).children('ul').stop();
//         $(this).children('ul').slideUp();
//     });
