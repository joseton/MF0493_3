<?php
namespace App\Models;

use Core\Model;
use PDO;

class UserModel extends Model{

    private $db;

    public function __construct(){
        $this->db = Model::getInstanceDB();
    }

    public function registrarDB($email, $pass, $emailToken){

      $sql = "select * from users where email = :email ";
      $stmt = $this->db->prepare($sql);
      $stmt->bindparam(":email", $email);
      $stmt->execute();
      $rows = $stmt->rowCount();

      if($rows > 0){

            return 0;

      }else{



      $sql = "insert into users values(:id, :email, :pass, default, :emailToken)";
      $stmt = $this->db->prepare($sql);



      $id = null;


      $stmt->bindparam(":id", $id);
      $stmt->bindparam(":email", $email);
      $stmt->bindparam(":pass", $pass);
      $stmt->bindparam(":emailToken", $emailToken);

      if($stmt->execute()){
           return 2; //registro ok
      }else{
          return 1; //fallo en el registro
      }

    }
  }

    public function loginDB($email, $pass){

      $sql = "select * from users where email = :email" ;
      $stmt = $this->db->prepare($sql);
      $stmt->bindparam(":email", $email);
      $stmt->execute();
      $data = $stmt->fetch(PDO::FETCH_ASSOC);

      // return $data['IsEmailConfirmed'];

      if($data['IsEmailConfirmed'] == "0"){
      return 0;
    }else if($data['IsEmailConfirmed'] == "1"){

      $sql = "select * from users where email = :email and pass = :pass";
      $stmt = $this->db->prepare($sql);
      $stmt->bindparam(":email", $email);
      $stmt->bindparam(":pass", $pass);
      $stmt->execute();

        if(!$stmt->execute()){
            return 1; //error en login
      }else{
        $rows = $stmt->rowCount();
        if($rows ==1){ //login ok

              return 2;

        }else{
                return 3;//datos erroneos
        }

      }

    }

}
public function checkToken($email, $token){

  $sql = "select * from users where email = :email";
  $stmt = $this->db->prepare($sql);
  $stmt->bindParam(':email', $email);
  $stmt->execute();
  $data = $stmt->fetch(PDO::FETCH_ASSOC);

         if($data['IsEmailConfirmed'] === '1'){

             return 0; // El registro se ha confirmado anteriormente

         }elseif ($data['emailToken'] === $token) { // Si los tokens son iguales

             $sql = 'update users set IsEmailConfirmed = 1 where email = :email';
             $stmt = $this->db->prepare($sql);
             $stmt->bindParam(':email', $email);
             if($stmt->execute()){
                  return 2; // Registro confirmado correctamente
              }else{
                  return 3; // Error en la conexión a la base de datos
              }

         }else{
             return 1; // No se ha podido confirmar el registro
         }

     }

}
