/*
* @name: setCookie
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: Crea una Cookie para la gestion sesión de login
* @date: 19/12/19
* @params:  cookieName(recibe el nombre de la cookie)
            cookieValue(recibe el valor de la cookie)
            exDays(recibe el tiempo de expiracion de la cookie)
* @return: none
*/
function setCookie(cookieName, cookieValue, exDays){
    // instacia la variable "d" al objeto "Date"
    var d = new Date();
    // suma los días recogidos por parámetro a la fecha actual
    d.setTime(d.getTime() + (exDays*24*60*60*1000));
    // se concatena el string a el formato UTC para tenerlo OK para crear la cookie
    var expires = "expires=" + d.toUTCString();
    // CREA LA COOKIE
    document.cookie = cookieName + "=" + cookieValue + "; " + expires;
}
// -----------------------------------------------------------------------
/*
* @name: getCookie
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: Lee una Cookie para la gestion sesión de login
* @date: 19/12/19
* @params:  cookieName(recibe el nombre de la cookie)
* @return: none
*/
function getCookie(cookieName){

    var name = cookieName + "=";
    var cookieArray = document.cookie.split(";");

    for (var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
        while (c.charAt(0)== " ") {
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
