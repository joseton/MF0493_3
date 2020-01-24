<?php
// TODO Challenge 7: Añadir el código PHP que se indica en la descripción del Challenge

 //usleep(150000);
 sleep(3);
//var_dump($_POST);
// if(isset($_POST)){
//     // recoje los datos por atributo "name"
//     $nombre = $_POST['name'];
//     $email = $_POST['email'];
//     $psw = $_POST['psw'];
//     // devuelve en formato JSON el mensaje
//     echo json_encode("Datos del formulario recibidos correctamente");
// }
if(isset($_POST["reg_email"])&&isset($_POST["reg_pass"])&&isset($_POST["reg_r_pass"])){
  $cad="usuario registrado correctamente <br/>";
  $cad.=$_POST["reg_email"]."<br/>".$_POST["reg_pass"]."<br/>".$_POST["reg_r_pass"];
  echo json_encode($cad);
}
if(isset($_POST["lg_email"])&&isset($_POST["lg_pass"])){
  $cad="datos de login correctos <br/>";
  $cad.=$_POST["lg_email"]."<br/>".$_POST["lg_pass"];
  echo json_encode($cad);
}
// echo json_encode($_POST["reg_email"]);
//echo json_encode("mensaje php");
