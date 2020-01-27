$( document ).ready(function() {

  $("#btn_contacto").click(function(){
    // var nombre = document.getElementById('nombre');
    // var nombre_val = document.getElementById('nombre_val');
    // var apellido = document.getElementById('apellido');
    // var apellido_val = document.getElementById('apellido_val');
    var nombre = $("#nombre");
    var nombre_val = $("#nombre_val");
    var apellido = $("#apellido");
    var apellido_val = $("#apellido_val");
    var email = $("#email");
    var email_val = $("#email_val");
    var pais = $("#pais");
    var pais_val = $("#pais_val");
    var mensaje = $("#mensaje");
    var mensaje_val = $("#mensaje_val");

    if(nombre.val() == ""){
      nombre_val.html("El campo 'Nombre' está vacío");
    }else{
      nombre_val.html("");
    }

    if(apellido.val() == ""){
      apellido_val.html("El campo 'Apellido' está vacío");
    }else{
      apellido_val.html("");
    }

    if (email.val() == "") {
      email_val.html("El campo 'Email' está vacío");
    } else if (!email_validar(email.val())){
      email_val.html("El Email no tiene formato: name@domain.ext");
    } else {
      email_val.html("");
    }

    if (pais.val() == "0"){
      pais_val.html("No se ha seleccionado un país");
    }else {
      pais_val.html("");
    }

    if(mensaje.val() == ""){
      mensaje_val.html("El campo 'Mensaje' está vacío");
    }else{
      mensaje_val.html("");
    }

    if ($(nombre_val).html() == ""
    &&  $(apellido_val).html() == ""
    &&  $(email_val).html() == ""
    &&  $(pais_val).html() == ""
    &&  $(mensaje_val).html() == ""){
      $.ajax({
        type: 'POST',
        url: 'backend/backend.php',
        dataType: 'json',
        data: $("#contacto").serialize(),

        success: function(dataResp){
          $("#dataResp").html(dataResp);
        },
        beforeSend: function(){
          $("#dataResp").html('<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>');
        },
        error: function(){
          $("#dataResp").html('Error en la comunicación con el servidor');
        }
      });
      event.preventDefault();
    }

  })

});

/*
* @name: email_validar
* @author: Javier Díaz Scarpetta
* @versio: 1.0
* @description: Valida un formato de un email mediante RegExp
* @date: 27/1/20
* @params: email.val()
// * @return: true/false
// */
function email_validar(email){
  var patt = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  return patt.test(email);
}
