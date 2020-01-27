window.onload = function() {
    // validació del formulari de registre amb API de validació d'HTML5
    var registre = document.getElementsByTagName("form")[0];
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var reg_email = document.getElementById("mail");
    var reg_pass = document.getElementById("psw");
    var reg_r_pass = document.getElementById("psw2");
    var error = document.getElementsByClassName("error");

    login.style.display = "none";

    // validació per al nom
    nombre.addEventListener("keyup", function(){
        if(nombre.value !== ""){
            error[0].innerHTML = "";
            nombre.className = "";
        }
    }, false);

    // validació per als cognoms
    apellidos.addEventListener("keyup", function(){
        if(apellidos.value == reg_pass.value){
            error[1].innerHTML = "";
            apellidos.className = "";
        }
    }, false);

    // validació del correu electrònic
    reg_email.addEventListener("keyup", function(){
        if(reg_email.validity.valid){
            error[2].innerHTML = "";
            reg_email.className = "";
        }
    }, false);

    // validació de la paraula de pas
    reg_pass.addEventListener("keyup", function(){
        if(reg_pass.validity.valid){
            error[3].innerHTML = "";
            reg_pass.className = "";
        }
    }, false);

    // validació per la repetició de la paraula de pas
    reg_r_pass.addEventListener("keyup", function(){
        if(reg_r_pass.value == reg_pass.value){
            error[4].innerHTML = "";
            reg_r_pass.className = "";
        }
    }, false);

    registre.addEventListener("submit", function(event){

        if(nombre.value == ""){
            error[0].innerHTML = "Necesitamos conocer tu nombre<br>";
            nombre.className = "invalid";
        }

        if(apellidos.value == ""){
            error[1].innerHTML = "Necesitamos conocer tus apellidos<br>";
            apellidos.className = "invalid";
        }

        if(reg_email.value == ""){
            error[2].innerHTML = "Rellena el campo email<br>";
            reg_email.className = "invalid";
        } else if(!reg_email.validity.valid){
            error[2].innerHTML = "El email tiene un formato incorrecto<br>";
            reg_email.className = "invalid";
        }

        if(reg_pass.value == ""){
            error[3].innerHTML = "Rellena el campo contraseña<br>";
            reg_pass.className = "invalid";
        } else if(!reg_pass.validity.valid){
            error[3].innerHTML = "La contraseña es demasiado corta<br>";
            reg_pass.className = "invalid";
        }

        if(reg_r_pass.value == ""){
            error[4].innerHTML = "Rellena el campo Repetir contraseña<br>";
            reg_r_pass.className = "invalid";
        } else if(reg_r_pass.value != reg_pass.value){
            error[4].innerHTML = "Las contraseñas no coinciden<br>";
            reg_r_pass.className = "invalid";
        }

        if (reg_email.className == "invalid"
        ||  reg_pass.className == "invalid"
        ||  reg_r_pass.className == "invalid"){
            event.preventDefault();
        } else {

            // recojo la caja de mensajes de respuesta
            var dataResp = document.getElementById('resultsr');
            // añado a la caja el icono "spinner"
            dataResp.innerHTML = '<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>';

            // ------------------------------------------------
            // AJAX
            // FormData: Clase definida en JS que utilizo para enviar los datos de un formulario
            var formData = new FormData(registre);
            // -------------------------------------
            // variables de configuración
            var method = 'POST';
            var url = 'php/backendreg.php';
            var async = true;
            // -------------------------------------
            // instancia a la clase "XMLHttpRequest" que se encarga de toda la configuración AJAX
            var req = new XMLHttpRequest();
            // Los datos se gestionan tanto de envio como recepción en formato "json"
            req.responseType = 'json';
            // espera a que llegue respuesta del servidor
            req.onreadystatechange = function() {
              // readyState: propiedad que nos devuelve un valor numérico para controlar el estado del response del server: 4	DONE	The operation is complete.
              // status: 200 -> respuesta OK del server
              if(this.readyState == 4 && this.status == 200){
                // añado en la caja, la respuesta del backend (echo en PHP)
                dataResp.innerHTML = req.response;
                // borra los campos del formulario
                registre.reset();
              }
            }
            // open: prepara la configuración
            req.open(method, url, async);
            // send: envia el formulario
            req.send(formData);
            // para el evento "submit". Obligatorio para que el formulario con Ajax funcione bien.
            event.preventDefault();
        }
      }, false);
};

$(document).ready(function(){
    // validació del formulari de login amb jQuery
    var boton = $("input[type=submit]");
    var lg_email = $("#logmail");
    var lg_pass = $("#logpsw");
    var errorEmail = $(".error").get(5);
    var errorPass = $(".error").get(6);

    // validació del correu electrònic
    lg_email.on("keyup", function(){
        if(lg_email.val() != "" && email_validar(lg_email.val())){
            $(errorEmail).html("");
            lg_email.removeClass("invalid");
        }
    });

    // validació de la paraula de pas
    lg_pass.on("keyup", function(){
        if(lg_pass.val() != "" && lg_pass.val().length > 5){
            $(errorPass).html("");
            lg_pass.removeClass("invalid");
        }
    });

    boton.on("click", function(){
        if(lg_email.val() == ""){
            $(errorEmail).html("Rellena el email<br>");
            lg_email.addClass("invalid");
        } else if(!email_validar(lg_email.val())){
            $(errorEmail).html("El email tiene un formato incorrecto<br>");
            lg_email.addClass("invalid");
        }

        if(lg_pass.val() == ""){
            $(errorPass).html("Rellena el campo contraseña<br>");
            lg_pass.addClass("invalid");
        } else if(lg_pass.val().length < 6){
            $(errorPass).html("La contraseña es demasiado corta<br>");
            lg_pass.addClass("invalid");
        }

        if ($(errorEmail).html() == ""
        &&  $(errorPass).html() == ""){
            $("#login").submit(function(event) {
                  $.ajax({
                      type: 'POST',
                      url: 'php/backendlog.php',
                      dataType: 'json',
                      data: $("#login").serialize(),

                      success: function(dataResp){
                          $("#resultsl").html(dataResp);
                      },
                      beforeSend: function(){
                          $("#resultsl").html('<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>');
                      },
                      error: function(){
                          $("#resultsl").html('Error en la comunicación con el servidor');
                      }
                  });
                  event.preventDefault();
            });
        }

    });
});

function mostrar_login(){
    $("#registro").hide();
    $("#login").fadeIn();
}

function mostrar_reg(){
    $("#login").hide();
    $("#registro").fadeIn();
}

function email_validar(email){
    var patt = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    return patt.test(email);
}
