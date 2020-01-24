function display(){
    var registre = document.getElementsByTagName("form")[0];
    registre.style.display="block";
}
    // validació del formulari de registre amb API de validació d'HTML5
function aparece(){
  var mostrar=document.getElementById("cartaboton");
  var carta=document.getElementsByClassName("carta")[0];
   carta.style.display="block";

}
$(document).ready(function(){

    $("a").click(function(){

        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        },1000);

    });

});
