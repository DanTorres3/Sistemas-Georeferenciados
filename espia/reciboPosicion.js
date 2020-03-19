function recibirPosicion(marker){
    db.collection('mapa').onSnapshot( snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if(change.type == "modified" || change.type == "added")
            {
                moverPosicion(marker, change.doc.data())
            }
        });
    });
}