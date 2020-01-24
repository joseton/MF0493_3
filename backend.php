<?php
// TODO Challenge 7: Añadir el código PHP que se indica en la descripción del Challenge
sleep(1.5);
    // si existe la petición por método POST
    if(isset($_POST['reg_email'])){
        // recoje los datos por atributo "name"
        $reg_email = $_POST['reg_email'];
        $reg_pass = $_POST['reg_pass'];
        $reg_r_pass = $_POST['reg_r_pass'];
        // devuelve en formato JSON el mensaje
        echo json_encode("Todo ok en cabina");
    }



    if(isset($_POST["lg_email"])  ){
        //
           $lg_email = $_POST['lg_email'];
         $lg_pass = $_POST['lg_pass'];
        if(!filter_var($lg_email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode( "Email address '$lg_email' is not considered valid.\n");
        }else{
            // devuelve en formato JSON el mensaje
            echo json_encode("Datos de login  recibidos correctamente");
        }


    }


    }
