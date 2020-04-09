<?php
namespace App\Controllers;
// use: va unido a los namespaces. Funciona como un require, include...
use Core\Controller;
use Core\View;


class StaticController extends Controller{

    public function renderHomeAction(){
        View::renderTwig('Static/home.html');
    }
    public function renderSliderAction(){
        View::renderTwig('Static/Slider.html');
    }
}
