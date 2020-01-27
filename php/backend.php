<?php

// temporizador de 1,5sec o 1500000 microsegons
usleep(1500000);

if(isset($_POST['reg_email'])){

    $reg_email = $_POST['reg_email'];
    $reg_pass = $_POST['reg_pass'];
    $reg_r_pass = $_POST['reg_r_pass'];
    $missatge = "Usuario registrado correctamente<br>";
    $missatge .= "Correo electrónico: ".$reg_email."<br>";
    $missatge .= "Contraseña: ".$reg_pass."<br>";
    $missatge .= "Repetir contraseña: ".$reg_r_pass;

} else {

    $lg_email = $_POST['lg_email'];
    $lg_pass = $_POST['lg_pass'];
    $missatge = "Datos de login correctos<br>";
    $missatge .= "Correo electrónico: ".$lg_email."<br>";
    $missatge .= "Contraseña: ".$lg_pass;
}
echo json_encode($missatge);
