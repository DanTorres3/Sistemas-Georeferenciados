formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    var registro = new Registro(null, formulario.nombre.value, formulario.codigo.value);
    registro.agregar();
    alert("El producto '" + formulario.nombre.value + "' ha sido guardado con éxito.");
    formulario.nombre.value = '';
    formulario.codigo.value = '';
    $('#nuevoproducto').modal('hide');
});