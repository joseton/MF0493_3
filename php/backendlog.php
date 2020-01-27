<?php
    // temporizador 2sec
    sleep(2);
    // si existe la petición por método POST
    if(isset($_POST)){

        // recoje los datos por atributo "name"
        $emaill = $_POST['logmail'];
        $pswl = $_POST['logpsw'];


        if(!filter_var($emaill, FILTER_VALIDATE_EMAIL)) {
            echo json_encode( "Email address '$emaill' is not considered valid.\n");
        }else{
            // devuelve en formato JSON el mensaje
            echo json_encode("Datos del formulario recibidos correctamente");
        }


    }
