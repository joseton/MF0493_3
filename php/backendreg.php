<?php
    // temporizador 2sec
    sleep(2);
    // si existe la petición por método POST
    if(isset($_POST)){

        // recoje los datos por atributo "name"
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $email = $_POST['mail'];
        $psw = $_POST['psw'];


        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode( "Email address '$email' is not considered valid.\n");
        }else{
            // devuelve en formato JSON el mensaje
            echo json_encode("Datos del formulario recibidos correctamente");
        }


    }
