$( document ).ready(function() {

   $("#btn_contacto").click(function(){
    // var nombre = document.getElementById('nombre');
    // var nombre_val = document.getElementById('nombre_val');
    // var apellido = document.getElementById('apellido');
    // var apellido_val = document.getElementById('apellido_val');
    var nombre = $("#nombre");
    var nombre_val = $("#nombre_val");
    var email = $("#email");
    var email_val = $("#email_val");
    var pais = $(".pais");
    // var pais_val = $("#provincias_val");
    // var mensaje = document.getElementById('mensaje');
    // var mensaje_val = document.getElementById('mensaje_val');
    //
    if(nombre.val() == ""){
        nombre_val.html("El campo 'Nombre' está vacío");
    }else{
        nombre_val.html("");
    }
    //
    // if(apellido.value == ""){
    //     apellido_val.innerHTML = "El campo 'Apellido' está vacío";
    // }else{
    //     apellido_val.innerHTML = "";
    // }
    //
    // if (email.val() == "") {
    //     email_val.html("El campo 'Email' está vacío");
    // } else if (!email_validar(email.val())){
    //     email_val.html("El Email no tiene formato: name@domain.ext");
    // } else {
    //     email_val.html("");
    // }
    //
    // if (pais.val() == "0"){
    //     pais_val.html("No ha seleccionado un país");
    // }else {
    //     pais_val.html("");
    // }
    //
    // if(mensaje.value == ""){
    //     mensaje_val.innerHTML = "El campo 'Mensaje' está vacío";
    // }else{
    //     mensaje_val.innerHTML = "";
    // }
  })

});

/*
* @name: email_validar
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: Valida un formato de un email mediante RegExp
* @date: 09/1/20
* @params: email.val()
// * @return: true/false
// */
function email_validar(email){
    var patt = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    return patt.test(email);
}





// $(document).ready(function(){
//         $("button").click(function(){
//
//                   var mensajes = "";
//                    var nombre = document.getElementById("nombre");
//                    var apellido = document.getElementById("apellido");
//                    var email = $("input[id='email']");
//                    var pais = $("select");
//                    var mensaje = document.getElementById("mensaje");
//
//                    if(nombre.value == ""){
//                        mensajes = "Escribe tu Nombre<br>";
//                        nombre.style.border = "1px solid red";
//                        nombre.classList.add("placeholder_val_ko");
//                        nombre.classList.remove("placeholder_val_ok");
//                        document.getElementsByClassName("result_nombre")[0].innerHTML = mensajes;
//                    }else{
//                        nombre.removeAttribute("style");
//                        nombre.classList.add("placeholder_val_ok");
//                        nombre.classList.remove("placeholder_val_ko");
//                        mensajes = "";
//                        document.getElementsByClassName("result_nombre")[0].innerHTML = mensajes;
//                    }
//
//                    if(apellido.value == ""){
//                        mensajes = "Escribe tu Apellido<br>";
//                        apellido.style.border = "1px solid red";
//                        apellido.classList.add("placeholder_val_ko");
//                        apellido.classList.remove("placeholder_val_ok");
//                        document.getElementsByClassName("result_apellido")[0].innerHTML = mensajes;
//                    }else{
//                        apellido.removeAttribute("style");
//                        apellido.classList.add("placeholder_val_ok");
//                        apellido.classList.remove("placeholder_val_ko");
//                        mensajes = "";
//                        document.getElementsByClassName("result_apellido")[0].innerHTML = mensajes;
//                    }
//
//                   if(email.val() == ""){
//                       mensajes = "Rellena el campo Email<br>";
//                       email.css("border","1px solid red");
//                       email.addClass("placeholder_val_ko");
//                       email.removeClass("placeholder_val_ok");
//                       $(".result_email").html(mensajes);
//
//                   }else if(!email_validar(email.val())){
//                       mensajes = "El email no cumple el formato nombre@dominio.ext)<br>";
//                       email.css("border","1px solid red");
//                       email.css("color","red");
//                       $(".result_email").html(mensajes);
//                   }else{
//                       email.removeAttr("style");
//                       email.addClass("placeholder_val_ok");
//                       email.removeClass("placeholder_val_ko");
//                       mensajes = "";
//                       $(".result_email").html(mensajes);
//                   }
//
//                   if(pais.val() == "[Selecciona]"){
//                       mensajes = "Selecciona el país desde donde escribes<br>";
//                       pais.css("border","1px solid red");
//                       pais.addClass("placeholder_val_ko");
//                       pais.removeClass("placeholder_val_ok");
//                       $(".result_pais").html(mensajes);
//
//                      }else{
//                        pais.removeAttr("style");
//                        pais.addClass("placeholder_val_ok");
//                        pais.removeClass("placeholder_val_ko");
//                        mensajes = "";
//                        $(".result_pais").html(mensajes);
//                    }
//
//                    if(mensaje.value == ""){
//                        mensajes = "Rellena el campo Mensaje<br>";
//                        mensaje.style.border = "1px solid red";
//                        mensaje.classList.add("placeholder_val_ko");
//                        mensaje.classList.remove("placeholder_val_ok");
//                        document.getElementsByClassName("result_mensaje")[0].innerHTML = mensajes;
//                    }else{
//                        mensaje.removeAttribute("style");
//                        mensaje.classList.add("placeholder_val_ok");
//                        mensaje.classList.remove("placeholder_val_ko");
//                        mensajes = "";
//                        document.getElementsByClassName("result_mensaje")[0].innerHTML = mensajes;
//                    }
//
//         });
// });
//
// /*
// * @name: email_validar
// * @author: Javier Díaz Scarpetta
// * @versio: 1.0
// * @description: Valida un formato de un email mediante RegExp
// * @date: 26/1/20
// * @params: email.val()
// * @return: true/false
// */
// function email_validar(email){
//     var patt = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
//     return patt.test(email);
// }


// window.onload = function() {
//   // validació del formulari de registre amb API de validació d'HTML5
//   var form = document.getElementsByTagName("form")[0];
//   var nombre = document.getElementById("nombre");
//   var apellido = document.getElementById("apellido");
//   var email = document.getElementById("email");
//   var error = document.getElementsByClassName("error");
//   var dataResp = document.getElementById('dataResp');
//
//   // validació del correu electrònic
//   email.addEventListener("keyup", function(){
//     if(email.validity.valid){
//       error[2].innerHTML = "";
//       email.className = "";
//     }
//   }, false);
//
//   form.addEventListener("submit", function(event){
//     if(nombre.value == ""){
//       error[0].innerHTML = "Escribe tu nombre";
//       nombre.className = "invalid";
//     }else{}
//     if(apellido.value == ""){
//       error[1].innerHTML = "Escribe tu apellido";
//       apellido.className = "invalid";
//     }else{}
//     if(email.value == ""){
//       error[2].innerHTML = "Ingresa tu email";
//       email.className = "invalid";
//     } else if(!email.validity.valid){
//       error[2].innerHTML = "El email tiene un formato incorrecto";
//       email.className = "invalid";
//     }
//
//     if (nombre.className == "invalid"
//     ||  apellido.className == "invalid"
//     ||  email.className == "invalid"){
//       event.preventDefault();
//     } else {
//       alert("ok");
//     }
//
//   }, false);
//
// };
