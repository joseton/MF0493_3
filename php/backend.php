<?php
if(isset($_POST['lg_email'])){
  $missatge = "Login correcte";
} else {
  $missatge = "Usuari registrat correctament";
}
echo json_encode($missatge);
