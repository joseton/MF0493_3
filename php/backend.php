<?php
    // temporizador 2sec
    usleep(1500000);

// PRIMER FORMULARIO REGISTRO

    // si existe la petición por método POST hay que diferenciarlas del otro POST ya que tenemos 2 POSTS
    if(isset($_POST['reg_email']) && isset($_POST['reg_pass']) && isset($_POST['reg_r_pass'])){
        // recoje los datos por atributo

        $reg_email = $_POST['reg_email'];
        $reg_pass = $_POST['reg_pass'];
        $reg_r_pass = $_POST['reg_r_pass'];

        $mensaje_reg = "";
        $mensaje_reg .= "Se ha registrado correctamente" . "<br>";
        $mensaje_reg .= "EMAIL: " . $reg_email . "<br>";
        $mensaje_reg .= "CONTRASEÑA: " . $reg_pass . "<br>";
        $mensaje_reg .= "REPETIR CONTRASEÑA: " . $reg_r_pass . "<br>";


        echo json_encode($mensaje_reg);




        // devuelve en formato JSON el mensaje

    }

// SEGUNDO FORMULARIO LOGIN
//     si existe la petición por método POST
    if(isset($_POST['lg_email']) && isset($_POST['lg_pass'])){

        // recoje los datos por atributo
        $lg_email = $_POST['lg_email'];
        $lg_pass = $_POST['lg_pass'];

        if(!filter_var($lg_email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode( "La dirección de email '$lg_email' no es válida.\n");
        }else{
            // devuelve en formato JSON el mensaje


            $mensaje_log = "";
            $mensaje_log .= "Login correcto" . "<br>";
            $mensaje_log .= "EMAIL: " . $lg_email . "<br>";
            $mensaje_log .= "CONTRASEÑA: " . $lg_pass . "<br>";


            echo json_encode($mensaje_log);

        }
    }
