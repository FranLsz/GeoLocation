function posicion(pos) {
    document.getElementById("lat").innerHTML = pos.coords.latitude;
    document.getElementById("lon").innerHTML = pos.coords.longitude;


    //obtencion de imagen desde la api de google
    var pm = pos.coords.latitude + "," + pos.coords.longitude;
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=" +
        pm + "&zoom=16&size=400x400&sensor=false";
    document.getElementById("mapa").src = url;
}

if (navigator.geolocation) {
    //obtencion de permisos para acceder a la ubicacion
    navigator.geolocation.getCurrentPosition(posicion, function (error) {
        alert("No puedo acceder a la posicion");
    });
}