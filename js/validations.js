window.onload = function() {
    //Cargamos elementos necesarios para validar el registro
    var form = document.getElementsByTagName("form");
    var error = document.getElementsByClassName("error");
    var reg_mail = document.getElementById("rmail");
    var reg_pass = document.getElementById("rpass");
    var reg_rpass = document.getElementById("rrpass");

    //limpiamos los mensajes de error del registro en el momento que se vacian o se corrigen

    reg_mail.addEventListener("keyup", function(){
      if(reg_mail.checkValidity()){
          error[0].innerHTML = "";
          reg_mail.className = "";
      }
    }, false);

    reg_pass.addEventListener("keyup", function(){
      if(reg_pass.value.length >= 6 || reg_pass.value == ""){
          error[1].innerHTML = "";
          reg_pass.className = "";
      }
    }, false);
    reg_rpass.addEventListener("keyup", function(){
      if(reg_rpass.value == ""){
          error[2].innerHTML = "";
          reg_rpass.className = "";
      }
    }, false);

    //Comprobamos los datos en el momento de hacer submit

    form[0].addEventListener("submit", function(event){
        var reg_ok = true;

        //Comprobamos que el input email tiene un formato correcto acorde al pattern puesto y que no este vacio
        if (reg_mail.value == "") {
            error[0].innerHTML = "Rellena el campo email";
            reg_mail.className = "invalid";
            event.preventDefault();
            reg_ok = false;
        } else if (!reg_mail.checkValidity()){
            error[0].innerHTML = "Introduce una dirección de correo válida";
            reg_mail.className = "invalid";
            event.preventDefault();
            reg_ok = false;
        }

        // Comprobamos que el input contraseña no este vacio y tenga minimo 6 caracteres
        if(reg_pass.value == "") {
            error[1].innerHTML ="Introduce una contraseña";
            reg_pass.className = "invalid";
            event.preventDefault();
            reg_ok = false;
        } else if (reg_pass.value.length < 6) {
            error[1].innerHTML = "Contraseña demasiado corta";
            reg_pass.className= "invalid";
            event.preventDefault();
            reg_ok = false;
        }

        //Comprobamos que rpass es igual a pass
        if(reg_rpass.value != reg_pass.value) {
            error[2].innerHTML = "Las contraseñas no coinciden";
            reg_pass.className = "invalid";
            reg_rpass.className = "invalid";
            reg_ok = false;
        }

        //En caso de que todo este correcto establecemos contacto con el servidor
        if(reg_ok){
            send_php(form[0],document.getElementsByClassName("respuesta")[0]);
            event.preventDefault();
        }
    },false);

    // recogemos las variables necesarias del login
    var log_mail = document.getElementById("lmail");
    var log_pass = document.getElementById("lpass");

    //limpiamos los mensajes de error del login en el momento que se vacian o se corrigen

    log_mail.addEventListener("keyup", function(){
      if(log_mail.checkValidity()){
          error[3].innerHTML = "";
          log_mail.className = "";
      }
    }, false);

    //Comprobamos los datos en el momento de hacer submit
    form[1].addEventListener("submit", function(event){
        var log_ok = true;

        if (log_mail.value == "") {
            error[3].innerHTML = "Rellena el campo email";
            log_mail.className = "invalid";
            event.preventDefault();
            log_ok = false;
        } else if (!log_mail.checkValidity()){
            error[3].innerHTML = "Introduce una dirección de correo válida";
            log_mail.className = "invalid";
            event.preventDefault();
            log_ok = false;
        }

        if(log_pass.value == "") {
            error[4].innerHTML ="Introduce una contraseña";
            log_pass.className = "invalid";
            event.preventDefault();
            log_ok = false;
        } else if (log_pass.value.length < 6) {
            error[4].innerHTML = "Contraseña incorrecta";
            log_pass.className= "invalid";
            event.preventDefault();
            log_ok = false;
        }

        if (log_ok){
            send_php(form[1],document.getElementsByClassName("respuesta")[1])
            event.preventDefault();
        }

    },false);



}

//funcion que envia un form al servidor con el div donde se escribira el echo
function send_php(form,div_respuesta) {

    div_respuesta.innerHTML ='<i style="left:0" class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>'

    var regData = new FormData(form);

    var method = 'POST';
    var url = 'php/backend.php';
    var async = true;

    var req = new XMLHttpRequest();
    req.responseType = 'json';

    req.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            div_respuesta.innerHTML = req.response;
        }
    }

    req.open(method, url, async);
    req.send(regData);
    form.reset();
}

//funciones para alternar entre el form de login y registro, llamadas desde innerHTML
function fadeoutr() {
    $("#registro").fadeOut("slow", function(){
        $("#login").delay(200).fadeIn('slow');
    });
}

function fadeoutl() {
    $("#login").fadeOut("slow", function(){
        $("#registro").delay(200).fadeIn('slow');
    });
}
