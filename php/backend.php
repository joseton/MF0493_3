<?php

usleep(1500000);
if(isset($_POST['reg_email'])){
    $reg_email = $_POST['reg_email'];
    $reg_pass = $_POST['reg_pass'];
    $reg_r_pass = $_POST['reg_r_pass'];
    $envia = "Usuario registrado correctamente<br><br>";
    // $envia .= "Correo electrónico: ".$reg_email."<br>";
    // $envia .= "Contraseña: ".$reg_pass."<br>";
    // $envia .= "Repetir contraseña: ".$reg_r_pass;
} else {
    $lg_email = $_POST['lg_email'];
    $lg_pass = $_POST['lg_pass'];
    $envia = "Datos de login correctos<br><br>";
    // $envia .= "Correo electrónico: ".$lg_email."<br>";
    // $envia .= "Contraseña: ".$lg_pass;
}
echo json_encode($envia);
