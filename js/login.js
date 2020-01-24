/*
* @name: mostrar_reg y mostrar_login
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: mostra o amaga els fomrularis de login i registre
* @date: 16/01/20
* @params: none
* @return: none
*/
function mostrar_login(){
    // inicialitza els camps del registre
    $("#lg_email").val('');
    $("#lg_email").removeClass("invalid");
    $("#lg_pass").val('');
    $("#lg_pass").removeClass("invalid");
    // esborra els missatges
    $("#lg_email_val").html('');
    $("#lg_pass_val").html('');
    $("#error").html('');
    // canvi de formulari
    $("#frm_registre").hide();
    $("#frm_login").fadeIn(750);
}
function mostrar_reg(){
    // inicialitza els camps del registre
    $("#reg_email").val('');
    $("#reg_email").removeClass("invalid");
    $("#reg_pass").val('');
    $("#reg_pass").removeClass("invalid");
    $("#reg_pass2").val('');
    $("#reg_pass2").removeClass("invalid");
    // esborra els missatges
    $("#reg_email_val").html('');
    $("#reg_pass_val").html('');
    $("#reg_pass2_val").html('');
    $("#success").html('');
    // canvi de formulari
    $("#frm_login").hide();
    $("#frm_registre").fadeIn(750);
}
// -----------------------------------------------------------------------------
/*
* @name: login
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: simulació de login
* @date: 16/01/20
* @params: none
* @return: none
*/
function login(){
    var lg_email = $("#lg_email");
    var lg_pass = $("#lg_pass");
    var lg_email_val = $("#lg_email_val");
    var lg_pass_val = $("#lg_pass_val");

    if(lg_email.val() == ""){
      $(lg_email_val).html("Correu electrònic buit");
      $(lg_email).addClass("invalid");
    } else if(!email_validar(lg_email.val())){
      $(lg_email_val).html("El correu electrònic té un format incorrecte");
      $(lg_email).addClass("invalid");
    } else {
      $(lg_email_val).html("");
      $(lg_email).removeClass("invalid");
    }

    if(lg_pass.val() == ""){
      $(lg_pass_val).html("Paraula de pas buida");
      $(lg_pass).addClass("invalid");
    } else if(lg_pass.val().length < 6){
      $(lg_pass_val).html("La paraula de pas és massa curta");
      $(lg_pass).addClass("invalid");
    } else {
      $(lg_pass_val).html("");
      $(lg_pass).removeClass("invalid");
    }

    if ($(lg_email_val).html() == ""
    &&  $(lg_pass_val).html() == ""){
        // petició AJAX pel login
        // TODO: adaptar per consultar a BD
        $.ajax({
            type: 'POST',
            url: 'php/backend.php',
            dataType: 'json',
            data: $("#frm_login").serialize(),
            success: function(missatge){
                $("#error").html(missatge);
                $("#login").hide();
                $("#logout").show();
            },
            beforeSend: function(){
                $("#error").html('<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>');
            },
            error: function(){
                $("#error").html('Error d\'accés al servidor');
            }
        });
    }
}
// -----------------------------------------------------------------------------
/*
* @name: registre
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: simulació de registre treballant amb "localStorage"
* @date: 19/12/19
* @params: none
* @return: none
*/
function registre(){
    var registrat = true;
    var reg_email = $("#reg_email");
    var reg_pass = $("#reg_pass");
    var reg_pass2 = $("#reg_pass2");
    var reg_email_val = $("#reg_email_val");
    var reg_pass_val = $("#reg_pass_val");
    var reg_pass2_val = $("#reg_pass2_val");

    if(reg_email.val() == ""){
      $(reg_email_val).html("Correu electrònic buit");
      $(reg_email).addClass("invalid");
    } else if(!email_validar(reg_email.val())){
      $(reg_email_val).html("El correu electrònic té un format incorrecte");
      $(reg_email).addClass("invalid");
    } else {
      $(reg_email_val).html("");
      $(reg_email).removeClass("invalid");
    }

    if(reg_pass.val() == ""){
      $(reg_pass_val).html("Paraula de pas buida");
      $(reg_pass).addClass("invalid");
    } else if(reg_pass.val().length < 6){
      $(reg_pass_val).html("La paraula de pas és massa curta");
      $(reg_pass).addClass("invalid");
    } else {
      $(reg_pass_val).html("");
      $(reg_pass).removeClass("invalid");
    }

    if(reg_pass2.val() == ""){
      $(reg_pass2_val).html("Paraula de pas buida");
      $(reg_pass2).addClass("invalid");
    } else if(reg_pass2.val().length < 6){
      $(reg_pass2_val).html("La paraula de pas és massa curta");
      $(reg_pass2).addClass("invalid");
    } else if (reg_pass.val() != reg_pass2.val()) {
      $(reg_pass2_val).html("Les paraules de pas no coincideixen!");
      $(reg_pass2).addClass("invalid");
    } else {
      $(reg_pass2_val).html("");
      $(reg_pass2).removeClass("invalid");
    }

    if ($(reg_email_val).html() == ""
    &&  $(reg_pass_val).html() == ""
    &&  $(reg_pass2_val).html() == ""){
        // petició AJAX pel registre
        // TODO: adaptar per consultar a BD
        $.ajax({
            type: 'POST',
            url: 'php/backend.php',
            dataType: 'json',
            data: $("#frm_registre").serialize(),
            success: function(missatge){
                $("#success").html(missatge);
            },
            beforeSend: function(){
                $("#success").html('<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>');
            },
            error: function(){
                $("#success").html('Error d\'accés al servidor');
            }
        });
    }
}
// -----------------------------------------------------------------------------
/*
* @name: email_validar
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: valida que el correu electrònic introduit segueix un patró vàlid
* @date: 22/01/20
* @params: email: correu electrònic introduit al formulari
* @return: true / false
*/
function email_validar(email){
    var patt = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    return patt.test(email);
}
