let id_registro = 1;
var nombre = localStorage.getItem("nombre");
var correo = localStorage.getItem("correo");
let fechaContacto = new Date();
var dia = String(fechaContacto.getDate()).padStart(2, '0');
var mes = String(fechaContacto.getMonth() + 1).padStart(2, '0');
var año = fechaContacto.getFullYear();
fechaContacto = dia + '/' + mes + '/' + año;

let crearli = document.getElementById('contactos');
let contactos = new Array();

console.log(nombre + " " + correo);

function agregarContacto(id, name, email, contact) {
 
    let contacto = [id, name, email, contact];

    let nuevoContacto = document.createElement('ul');
    
    for (let i = 0; i < contacto.length; i++) {
        let nuevaColumna = document.createElement('li');
        nuevoContacto.appendChild(nuevaColumna);
        let info = document.createTextNode(contacto[i]);

        nuevaColumna.appendChild(info);
        crearli.insertBefore(nuevoContacto, crearli.lastChild);
    }

    id_registro++
          
}

window.addEventListener('load', agregarContacto(id_registro, nombre, correo, fechaContacto));
    
    



