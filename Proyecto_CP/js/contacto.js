
window.onload =function(){

    var mensajes = "";
    var nombre = document.getElementById("nombre")
    var email =  document.getElementById("email")
    var mensaje = document.getElementById("mensaje");
    var mensaje = document.getElementById("tlf");



    if(nombre.value == ""){
        mensajes = "Rellena el campo Nombre<br>";
        nombre.style.border = "1px solid red";
        nombre.classList.add("placeholder_val_ko");
        nombre.classList.remove("placeholder_val_ok");
        document.getElementsByClassName("result_nombre")[0].innerHTML = mensajes;
    }else{
        nombre.removeAttribute("style");
        nombre.classList.add("placeholder_val_ok");
        nombre.classList.remove("placeholder_val_ko");
        mensajes = "";
        document.getElementsByClassName("result_nombre")[0].innerHTML = mensajes;
    }

    if(email.value == ""){
        mensajes = "Rellena el campo Email<br>";
        email.style.border = "1px solid red";
        email.classList.add = "placeholder_val_ko";
        email.classList.remove = "placeholder_val_ok" ;
        document.getElementsByClassName = "result_nombre" [0].innerHTML = mensajes;

    }else if(email_validar(email.val())){
        mensajes = "El email no cumple el formato nombre@dominio.ext)<br>";
        email.style.border ="1px solid red";
        email.style.border ="red";
        document.getElementsByClassName ="result_email" [0].innerHTML = mensajes;
    }else{
        removeAttribute("style");
        email.addClass= "placeholder_val_ok";
        email.removeClass ="placeholder_val_ko";
        mensajes = "";
        document.getElementsByClassName ="result_email"[0].innerHTML = mensajes;
    }

    if(tlf.val() == ""){
        mensajes = "Rellena el campo Teléfono<br>";
        tlf.style.border ="1px solid red";
        tlf.addClass ="placeholder_val_ko";
        tlf.removeClass ="placeholder_val_ok";
        document.getElementsByClassName("result_tlf")[0].innerHTML = mensajes;

    }else if(!telefono_validar(tlf.val())){
        mensajes = "El teléfono no tiene el formato (9/7/6xxxxxxxx)<br>";
        tlf.style.border ="1px solid red";
        tlf.style.border="red" ;
        document.getElementsByClassName("result_tlf")[0].innerHTML = mensajes;
    }else{
        tlf.removeAttr ="style";
        tlf.addClass ="placeholder_val_ok";
        tlf.removeClass ="placeholder_val_ko";
        mensajes = "";
        document.getElementsByClassName("result_tlf")[0].innerHTML = mensajes;
    }

    if(mensaje.value == ""){
        mensajes = "Rellena el campo Mensaje<br>";
        mensaje.style.border = "1px solid red";
        mensaje.classList.add ="placeholder_val_ko";
        mensaje.classList.remove ="placeholder_val_ok";
        document.getElementsByClassName "result_mensaje" [0].innerHTML = mensajes;
    }else{
        removeAttribute("style");
        mensaje.classList.add "placeholder_val_ok";
        mensaje.classList.remove "placeholder_val_ko" ;
        mensajes = "";
        document.getElementsByClassName("result_mensaje")[0].innerHTML = mensajes;
    }


};


/*
* @name: telefono_validar
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: Valida un formato de teléfono mediante RegExp
* @date: 08/1/20
* @params: tlf.val()
* @return: true/false
*/
function telefono_validar(tlf){
    var patt = new RegExp(/^[9|7|6]{1}([\d]{2}[-]*){3}[\d]{2}$/);
    return patt.test(tlf);
}

/*
* @name: email_validar
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: Valida un formato de un email mediante RegExp
* @date: 08/1/20
* @params: email.val()
* @return: true/false
*/
function email_validar(email){
    var patt = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    return patt.test(email);
}
/*
* @name: dni_validar
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: Valida un formato de DNI mediante RegExp
* @date: 09/1/20
* @params: dni.val()
* @return: true/false
*/
function dni_validar(dni){
    var patt = new RegExp(/^\d{8}[a-zA-Z]$/);
    var numero;
    var letr;
    var letra;

    if(patt.test(dni)){
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substring(numero,numero+1);
        if (letra!=letr.toUpperCase()) {
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}
