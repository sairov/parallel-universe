// VARIABLES
var nombreRegistro = document.getElementById('name');
var correoRegistro = document.getElementById('correo');
var botonRegistro = document.getElementById('boton');
var mensajeOk = document.getElementById('exitoso');


// FUNCIONES REGISTRO

function validarCamposRegistro(nombreRegistro, correoRegistro) {
    if (nombreRegistro.value == '') {
        nombreRegistro.setCustomValidity('Ingresa tu Nombre');
        nombreRegistro.style.border = '3px solid red';
    } else if (correoRegistro.value == '') {
        correoRegistro.setCustomValidity('Ingresa un Correo válido');
        correoRegistro.style.border = '3px solid red';   
        nombreRegistro.setCustomValidity('');
        nombreRegistro.style.border = 'none';
        nombreRegistro.style.borderBottom = '1px solid #FFF';
    } else {
        nombreRegistro.setCustomValidity('');
        nombreRegistro.style.border = 'none';
        nombreRegistro.style.borderBottom = '1px solid #FFF';
        correoRegistro.setCustomValidity('');
        correoRegistro.style.border = '1px solid #FFF';
        correoRegistro.style.border = 'none';            
    }
}

document.addEventListener('focusout', function () {
    validarCamposRegistro(nombreRegistro, correoRegistro)    
});

botonRegistro.addEventListener('click', function(e) {

        var arroba = correoRegistro.value.includes('@');

     if (nombreRegistro.value != "" && correoRegistro.value !="" &&  arroba == true ) {
           e.preventDefault();
          mensajeOk.innerHTML = `A la brevedad enviaremos un correo a ${correoRegistro.value}.`;
          localStorage.setItem("nombre", nombreRegistro.value);
          localStorage.setItem("correo", correoRegistro.value);
          window.document.location= './admin.html';
     } else {
        validarCamposRegistro(nombreRegistro, correoRegistro); 
     }
    
})

