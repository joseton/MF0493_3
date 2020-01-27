var img = new Image();
img.onload = function() {
  //alert(this.width + 'x' + this.height);
  //1263px en mi ordenador
var proporcion=1263/this.width;
//alert(proporcion);
//es el paso de un ancho 564px img4  por ejemplo
//al ancho estandar 1024px;
//por regla de 3
var alto=(this.height)*proporcion;
// cambiar directamente el alto del main
//alert(alto);
document.getElementById('central').style.height=alto+"px";
}
img.src = "nut_milk/img4.jpg";

// var imag = document.getElementById('central');
// document.getElementById('central').style.backgroundImage="url(../nut_milk/img5.jpg)";
// style = imag.currentStyle || window.getComputedStyle(imag, false);
// bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
// alert(bi);
// var ruta=document.getElementById
// img.src = '../nut_milk/img4.jpg';
// img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
///////////////////blog con ajax /////////////////////////
///////////////////blog con ajax /////////////////////////
///////////////////blog con ajax /////////////////////////
///////////////////blog con ajax /////////////////////////
$(document).ready(function() {
    $("#opinion").submit(function(event) {
        // método AJAX de jQuery
        $.ajax({
            // config. de datos de envío
            type: 'POST',
            url: 'php/backend.php',
            dataType: 'json',
            data: $("#opinion").serialize(),
            // control de acciones en el envio y respuesta del server
            success: function(ajax_blog){
                $("#ajax_blog").html(ajax_blog);
            },
            beforeSend: function(){
                $("#ajax_blog").html('<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>');
                //$("#ajax_blog").html('bien');
            },
            error: function(){
                $("#ajax_blog").html('Error en la comunicación con el servidor');
            }
        });
        event.preventDefault();
    });
   //formulario del login
});
