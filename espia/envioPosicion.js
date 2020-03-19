function enviarPosicion(lat, lng) {
    db.collection("mapa").doc("UrjGdKwMjys5lc3sNqHq").update({
        lat: lat,
        lng: lng
    });
}