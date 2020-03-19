var coordenadas = {
    lat: 0,
    lng: 0
}

var propiedades = {
    center: coordenadas,
    zoom: 20
}

function iniciaMapa(){
    
    map = new google.maps.Map(document.getElementById("map"), propiedades);

    var icono = {
        url: "https://media0.giphy.com/media/jwE4ScirAX5P5Pk6HF/source.gif",
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    }

    var marker = new google.maps.Marker({
        position: { lat: 0, lng: 0},
        icon: icono,
        scaledSize: new google.maps.Size(25, 25),
        map: map
    });

    recibirPosicion(marker);
    
}

function moverPosicion(marker, pos){

    console.log(pos);

    marker.setPosition(new google.maps.LatLng(pos.lat, pos.lng));
    map.panTo(new google.maps.LatLng(pos.lat, pos.lng));
    map.setCenter(pos);
}