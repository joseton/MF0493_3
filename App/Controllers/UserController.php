<?php
namespace App\Controllers;
// use: va unido a los namespaces. Funciona como un require, include...
use Core\Controller;
use Core\View;
use App\Models\UserModel;
use Core\Security;


class UserController extends Controller{

    public function renderSuscripcionAction(){
        View::renderTwig('User/suscripcion.html');
    }

    public function renderLoginRegAction(){
        View::renderTwig('User/login_reg.html');
    }

    public function RegistroAction($params){

        sleep(2);

        $email = Security::secure_input($params['reg_email']);
        $pass = Security::secure_input($params['reg_pass']);
        $pass = Security::en_de_cryptIt($pass, 'en');
        $token = Security::tokenGen(20);

        $registrar = new UserModel();
        $check = $registrar->registrarDB($email, $pass, $token);

        // echo json_encode($check);

        switch ($check) {

            case 0:
                echo json_encode('El email ya está registrado en nuestra app');

                break;
            case 1:
                echo json_encode('Error en el registro');

                break;

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
                $subject = 'Por favor, confirma el registro(Ruben)';

                if(!Security::email($email, $subject, $body)){
                    echo json_encode('No se ha podido enviar el email de confirmación de registro. Inténtalo más tarde');
                }else{
                    echo json_encode('Usuario registrado con éxito, verifica tu email para confirmar el registro ');
                }
                break;

            default:
                echo json_encode('Error en la base de datos');

                break;
        }

    }


    public function LoginAction($params){

        sleep(2);

        $email = Security::secure_input($params['lg_email']);
        $pass = Security::secure_input($params['lg_pass']);
        $pass = Security::en_de_cryptIt($pass, 'en');

        $logearse = new UserModel();
        $check = $logearse->loginDB($email, $pass);

        switch ($check) {
            case 0:
                echo json_encode('Falta confirmar registro por email');
                break;
            case 1:
                echo json_encode('Error en el login');
                break;
            case 2:
                echo json_encode('Datos erróneos');
                break;
            case 3:
                echo json_encode('Login correcto');
                break;

            default:
                echo json_encode('Error en la base de datos');
                break;
        }

    }

    public function emailConfirmAction($params){
        $model = new UserModel;
        $check = $model->checkToken($params['email'], $params['token']);
        $model->closeDB();

        switch ($check) {
            case 0:
                echo json_encode('El registro se ha confirmado anteriormente');

                break;

            case 1:
                echo json_encode('No se ha podido confirmar el registro');

                break;
            case 2:
                echo json_encode('Registro confirmado correctamente');

                break;
            case 3:
                echo json_encode('Error en la conexión a la base de datos');

                break;

            default:
                echo json_encode('Error en la base de datos');

                break;
        }

    }

    // SUSCIPCION_____________________________________________________________________________________________
    public function SuscripcionAction($params){

            sleep(2);

            // El USERMODEL no nos hace falta ya que no enviaremos datos a la BBDD
            $nombre = Security::secure_input($params['nombre']);
            $apellidos = Security::secure_input($params['apellidos']);
            $email = Security::secure_input($params['email']);
            $telefono = Security::secure_input($params['tlf']);
            $dni = Security::secure_input($params['dni']);
            $ano_nac = Security::secure_input($params['any']);
            $provincias = Security::secure_input($params['provincias']);
            $mensaje = Security::secure_input($params['mensaje']);



            // OB_START Y OB_END_CLEAN meten esa vista con el twig dentro del body en App/Views/Email/suscripcion.html, estamos metiendo El array con los datos.
            ob_start();
            View::renderTwig('Email/suscripcion.html', array('nombre'=>$nombre, 'apellidos'=>$apellidos, 'email'=>$email, 'tlf'=>$telefono, 'dni'=>$dni, 'any'=>$ano_nac, 'provincias'=>$provincias, 'mensaje'=>$mensaje));
            $body = ob_get_contents();
            ob_end_clean();
            // SUBJECT = es el ASUNTO del email
            $subject = 'Datos del formulario de suscripción';

            if(!Security::email($email, $subject, $body)){
                echo json_encode('No se ha podido enviar el email de confirmación de suscripción. Inténtelo más tarde');
            }else{
                echo json_encode('Ha realizado su suscripción con éxito');
            }

    }

}
