formularioeditar.addEventListener('submit', (e) => {
    e.preventDefault();

    let id = formularioeditar.ideditar.value;
    let nombre = formularioeditar.nombreedit.value;
    let codigo = formularioeditar.codigoedit.value;

    var registro = new Registro(id, nombre, codigo);

    registro.actualizar();

    var idregistro = document.getElementById(id);
    idregistro.querySelector('.nombre').value = nombre + ' ';
    idregistro.querySelector('.codigo').value = codigo + ' ';

    formularioeditar.nombreedit.value = '';
    formularioeditar.codigoedit.value = '';

    $('#editarproducto').modal('hide');
});