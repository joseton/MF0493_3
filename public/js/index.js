// AQUÍ HACEMOS CON JS QUE EL NAVBAR CUANDO BAJEMOS (SCROLL) EL MENÚ SEA PEGUE ARRIBA
$(document).ready(function(){
	var altura = $('.menu').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});

});
// __________________________________________________________________
