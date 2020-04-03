<?php
namespace App\Controllers;
// use: va unido a los namespaces. Funciona como un require, include...
use Core\Controller;
use Core\View;

class StaticController extends Controller{

    public function renderIndexAction(){
        View::renderTwig('Static/index.html');
    }

    public function renderSliderAction(){
        View::renderTwig('Static/slider.html');
    }

    public function renderCuriosidadesAction(){
        View::renderTwig('Static/curiosidades.html');
    }

    public function renderDondeestamosAction(){
        View::renderTwig('Static/dondeestamos.html');
    }
}
