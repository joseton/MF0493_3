$(document).ready(function(){

    //Implementación del mapa usando leaflet
    var mymap = L.map("mapa").setView([40.419, -3.69], 5);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken:'pk.eyJ1IjoidmlueWV0YSIsImEiOiJjazU4ZnVtM3gwYjB0M21vYTUybTJtd3pvIn0.W2fY5xeCMDOkNvHvnIVZ3g'
    }).addTo(mymap);

    //Creacion de los pins con onclick effect

    var villena = L.marker([38.632, -0.846]).addTo(mymap);
    var lugo = L.marker([43.664, -7.594]).addTo(mymap);

    villena.on('click', leyendas);
    lugo.on('click', resu);



});
