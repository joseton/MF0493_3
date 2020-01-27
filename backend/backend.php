<?php

  sleep(1.5);

  if(isset($_POST['email'])){
    $email_log = $_POST['email'];
    $nombre_log = $_POST['nombre'];

    if(!filter_var($email_log, FILTER_VALIDATE_EMAIL)) {
      echo json_encode( "Email address '$email_log' is not considered valid.\n");
    }else{
      echo json_encode("Gracias por escribirnos " . $nombre_log);
    }
  }
