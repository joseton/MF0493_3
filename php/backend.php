<?php
    sleep(2);

    if(isset($_POST["mailreg"])){

        $r_email = $_POST['mailreg'];
        $r_psw = $_POST['pswreg'];
        $r_rpsw = $_POST['rpswreg'];
        $r_respuesta =["Usuario registrado correctamente<br>"];

        echo json_encode($r_respuesta);

    }

    if(isset($_POST["lg_email"])){

        $l_email = $_POST['lg_email'];
        $l_psw = $_POST['lg_pass'];
        $l_respuesta =["Datos de login correctos<br>"];

        echo json_encode($l_respuesta);
    }
