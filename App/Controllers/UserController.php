<?php
namespace App\Controllers;
// use: va unido a los namespaces. Funciona como un require, include...
use Core\Controller;
use Core\View;
use App\Models\UserModel;
use Core\Security;


class UserController extends Controller{

    public function renderContactoAction(){
        View::renderTwig('User/contacto.html');
    }

    public function renderLoginRegAction(){
        View::renderTwig('User/login_reg.html');
    }
    public function registroAction($params){
      sleep(1);

      $email = Security::secure_input($params["mailreg"]);
      $pass = Security::secure_input($params["pswreg"]);
      $pass = Security::en_de_cryptIt($pass, "en");
      $token = Security::tokenGen(20);


       // $email = $params["mailreg"];
       // $pass = $params["pswreg"];
      //
      $registro = new UserModel;
      $check = $registro->registrarDB($email, $pass, $token);

      // echo json_encode($check);

      switch ($check) {
        case 0:
             echo json_encode("El email ya esta registrado en nuestra app");
           break;

         case 1:
             echo json_encode("Error en el registro ");
             break;

          case 2:
                 // echo json_encode("Te has registrado correctamente ");
                 // break;



             case 2:

             // GESTION DEL EMAIL
             $href = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
             $href = substr($href, 0, -9) . '/eConfirm';
             // OB_START Y OB END CLEAN meten esa vista con el twig dentro del body en App/Views/Email/registro.html
             ob_start();
             View::renderTwig('Email/registro.html', array('href'=>$href, 'token'=>$token, 'email'=>$email));
             $body = ob_get_contents();
             ob_end_clean();
             // SUBJECT = es el asunto del email
             $subject = 'Por favor, confirma el registro(Soc en Josep)';

             if(!Security::email($email, $subject, $body)){
               echo json_encode('No se ha podido enviar el email de confirmación de registro. Inténtalo más tarde');
             }else{
               echo json_encode('Usuario registrado con éxito, verifica tu email para confirmar el registro ');
             }
             break;

               default:
               echo json_encode("Error en la base de datos");
             break;
      }

    }
    public function loginAction($params){
      sleep(1);

      $email = Security::secure_input($params["lg_email"]);
      $pass = Security::secure_input($params["lg_pass"]);
      $pass = Security::en_de_cryptIt($pass, "en");
      $token = Security::tokenGen(20);



      $login = new UserModel;
      $check = $login->loginDB($email, $pass);

      switch ($check) {
        case 0:
             echo json_encode("Falta confirmar registro por email");
           break;

        case 1:
             echo json_encode("Error en el login");
           break;
           //iniciar sesion
           case 2:
             echo json_encode("Login correcto");
             break;
          case 3:
               echo json_encode("Datos erroneos");
               break;

             default:
               echo json_encode("Error en la base de datos");
             break;
      }

    }
    public function emailConfirmAction($params){

      if(!isset($params["token"])){ header("location: home");}
      $model = new UserModel;
      $check = $model->checkToken($params['email'], $params['token']);
      $model->closeDB();

      switch ($check) {
          case 0:
            echo json_encode("El registro se ha confirmado anteriormente ");
            break;


          case 1:
          echo json_encode("No se ha podido confirmar el registro  ");
          break;


          case 2:
          echo json_encode("Registro confirmado correctamente ");
          break;



            case 3:
            echo json_encode("Error en la conexion a la  base de datos ");
            break;



          default:
          echo json_encode("Error en la  base de datos ");
              break;
      }

  }
}
