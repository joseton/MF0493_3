<?php
 //usleep(150000);
 sleep(3);

if(isset($_POST["opinion"])){
  $cad="hemos tomado su opinion en cuenta <br/>";
  $cad.=$_POST["opinion"];
}
echo json_encode($cad);
// echo json_encode($_POST["reg_email"]);
//echo json_encode("mensaje php");
