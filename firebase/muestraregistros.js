function muestraRegistros(doc) {

    var registro = new Registro(doc.id, doc.data().nombre, doc.data().codigo);
    
    let li = document.createElement("li");
    li.setAttribute("id", registro.id);
    li.className = "list-group-item list-group-item-action list-group-item-dark m-1";

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.value = registro.nombre;
    nombre.className = "nombre form-control"

    let codigo = document.createElement("input");
    codigo.type = "text";
    codigo.value = registro.codigo;
    codigo.className = "codigo form-control"

    let borrar = document.createElement("button");
    borrar.className = "btn btn-outline-danger m-3 borrar";
    borrar.textContent = "Borrar ";

    let trashcan = document.createElement("i");
    trashcan.className = "fas fa-trash";

    borrar.appendChild(trashcan);

    let editar = document.createElement("button");
    editar.className = "btn btn-outline-primary m-3 editar";
    editar.textContent = 'Editar ';
    editar.setAttribute("data-toggle", "modal");
    editar.setAttribute("data-target", "#editarproducto");

    let pen = document.createElement("i")
    pen.className = "fas fa-pen";

    editar.appendChild(pen);

    li.appendChild(borrar);
    li.appendChild(editar);
    li.appendChild(nombre);
    li.appendChild(codigo);
    
    productoslista.appendChild(li);

    borrar.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute("id");
        registro.borrar(id);
    });

    editar.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute("id");
        registro.editar(id);
    });
}