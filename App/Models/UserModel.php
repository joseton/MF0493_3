<?php
namespace App\Models;

use Core\Model;
use PDO;

class UserModel extends Model{

    private $db;

    public function __construct(){
        $this->db = Model::getInstanceDB();
    }

    // REGISTRO___________________________________________________________________


    public function registrarDB($email, $pass, $emailToken){


       $sql = "select * from users where email = :email";
       $stmt = $this->db->prepare($sql);
       $stmt->bindParam(':email', $email);
       $stmt->execute();
       $rows = $stmt->rowCount();


       if ($rows == 1) {

           return 0;  //El email ya está previamente registrado

       } else {
           //El email no esta registrado(no esxite en la BBDD), entonces hazme el INSERT
           // El parámetro :IsEmailConfirmed no hace falta ponerlo porque ya está por defecto en 0, con poner "default" ya está
           $sql = "insert into users values (:id, :email, :pass, default , :emailToken)";
           $stmt = $this->db->prepare($sql);


           $id = null;
           $stmt->bindParam(':id', $id);
           $stmt->bindParam(':email', $email);
           $stmt->bindParam(':pass', $pass);
           // $stmt->bindParam(':IsEmailConfirmed', $IsEmailConfirmed);
           // :IsEmailConfirmed = no hace falta ponerlo porque ya está por defecto en 0, con poner "default" ya lo recoge
           $stmt->bindParam(':emailToken', $emailToken);

           $stmt->execute();



           $stmt = $this->db->prepare($sql);

           if(!$stmt->execute()){
               return 2; //'Te has registrado correctamente'
           }else{
               return 1; //'Error en el registro'
           }

       }



    }



    // LOGIN___________________________________________________________________
    public function loginDB($email, $pass){

             $sql = "select * from users where email = :email";
             $stmt = $this->db->prepare($sql);

             $stmt->bindParam(':email', $email);
             $stmt->execute();
             $data = $stmt->fetch(PDO::FETCH_ASSOC);


             if ($data['IsEmailConfirmed'] == '0') {  // IsEmailConfirmed == 0  -> No está registrado
                 return 0;  //'Falta registrar registro por email'

             } else if ($data['IsEmailConfirmed'] == '1'){
                 $sql = "select * from users where email = :email and pass = :pass";

                 $stmt = $this->db->prepare($sql);

                 $stmt->bindParam(':email', $email);
                 $stmt->bindParam(':pass', $pass);
                 $stmt->execute();


                 if(!$stmt->execute()){
                     return 1; //Error en el login
                 }else{
                     $rows = $stmt->rowCount();

                     if ($rows == 1) {
                         return 3; //Login correcto

                     } else {
                         return 2; //Datos erróneos
                     }
                 }

             }
     }


     // Aquí comprobamos que el token de la BBDD y el del email de confirmación coincidan, si es que sí (si que coinciden) , echo 'se ha registrado correctamente'
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
