window.onload = function() {
    // validació del formulari de registre amb API de validació d'HTML5
    var registre = document.getElementsByTagName("form")[0];
    var reg_email = document.getElementById("reg_email");
    var reg_pass = document.getElementById("reg_pass");
    var reg_r_pass = document.getElementById("reg_r_pass");
    var error = document.getElementsByClassName("error");


    login.style.display = "none";


    // validació del correu electrònic
    reg_email.addEventListener("keyup", function(){
        if(reg_email.validity.valid){
            error[0].innerHTML = "";
            reg_email.className = "";
        }
    }, false);

    // validació de la paraula de pas
    reg_pass.addEventListener("keyup", function(){
        if(reg_pass.validity.valid){
            error[1].innerHTML = "";
            reg_pass.className = "";
        }
    }, false);

    // validació per la repetició de la paraula de pas
    reg_r_pass.addEventListener("keyup", function(){
        if(reg_r_pass.value == reg_pass.value){
            error[2].innerHTML = "";
            reg_r_pass.className = "";
        }
    }, false);

    registre.addEventListener("submit", function(event){
        if(reg_email.value == ""){
            error[0].innerHTML = "Rellena el campo email";
            reg_email.className = "invalid";
        } else if(!reg_email.validity.valid){
            error[0].innerHTML = "El email tiene un formato incorrecto";
            reg_email.className = "invalid";
        }

        if(reg_pass.value == ""){
            error[1].innerHTML = "Rellena el campo contraseña";
            reg_pass.className = "invalid";
        } else if(!reg_pass.validity.valid){
            error[1].innerHTML = "La contraseña es demasiado corta";
            reg_pass.className = "invalid";
        }

        if(reg_r_pass.value == ""){
            error[2].innerHTML = "Rellena el campo Repetir contraseña";
            reg_r_pass.className = "invalid";
        } else if(reg_r_pass.value != reg_pass.value){
            error[2].innerHTML = "Las contraseñas no coinciden";
            reg_r_pass.className = "invalid";
        }

        if (reg_email.className == "invalid"
        ||  reg_pass.className == "invalid"
        ||  reg_r_pass.className == "invalid"){
            event.preventDefault();
        } else {
            // alert("El usuario se ha registrado correctamente");

            // AJAX
            // FormData: Clase definida en JS que utilizo para enviar los datos de un formulario
            var dataResp_registro = document.getElementById('dataResp_registro');
            dataResp_registro.innerHTML = '<i id="spiner" class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>';
            var formData = new FormData(registre);
            // -------------------------------------
            // variables de configuración
            var method = 'POST';
            var url = 'php/backend.php';
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
                    // añado en la caja, la respuesta del backend (hecho en PHP)
                    dataResp_registro.innerHTML = req.response;
                }
                // else{
                //     dataResp_registro.innerHTML = "Ha surgido un problema con el servidor";
                // }
            }
            // open: prepara la configuración
            req.open(method, url, async);
            // send: envia el formulario
            req.send(formData);
            // borra los campos del formulario
            registre.reset();
            // para el evento "submit". Obligatorio para que el formulario con Ajax funcione bien.

        }
        event.preventDefault();

    }, false);
};

//
$(document).ready(function(){
    // validació del formulari de login amb jQuery
    var boto = $("input[type=button]");
    var lg_email = $("#lg_email");
    var lg_pass = $("#lg_pass");
    var errorEmail = $(".error").get(3);
    var errorPass = $(".error").get(4);

    //
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

    boto.on("click", function(){
        if(lg_email.val() == ""){
            $(errorEmail).html("Rellena el email");
            lg_email.addClass("invalid");
        } else if(!email_validar(lg_email.val())){
            $(errorEmail).html("El email tiene un formato incorrecto");
            lg_email.addClass("invalid");
        }

        if(lg_pass.val() == ""){
            $(errorPass).html("Rellena el campo contraseña");
            lg_pass.addClass("invalid");
        } else if(lg_pass.val().length < 6){
            $(errorPass).html("La contraseña es demasiado corta");
            lg_pass.addClass("invalid");
        }

        if ($(errorEmail).html() == ""
        &&  $(errorPass).html() == ""){
            // alert("El usuario ha entrado correctamente");
            $.ajax({
                // config. de datos de envío
                type: 'POST',
                url: 'php/backend.php',
                dataType: 'json',
                data: $("#login").serialize(),
                // control de acciones en el envio y respuesta del server
                success: function(dataResp){
                    $("#dataResp_login").html(dataResp);
                },
                beforeSend: function(){
                    $("#dataResp_login").html('<i class="spiner1" class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>');
                },
                //     error: function(){
                //         $("#dataResp_login").html('Error en la comunicación con el servidor');
                //     }
            });
            event.preventDefault();
        }

        
    });
});

function mostrar_login(){
    $("#registre").hide();
    $("#login").fadeIn(750);
}

function mostrar_reg(){
    $("#login").hide();
    $("#registre").fadeIn(750);
}

function email_validar(email){
    var patt = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    return patt.test(email);
}
