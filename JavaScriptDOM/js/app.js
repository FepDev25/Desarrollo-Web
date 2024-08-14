/* ********************************** Seleccionar contenido ********************************** */

// querySelector: Cero o un elemento

const heading = document.querySelector(".header__texto h2");
heading.classList.add('nueva_clase');
console.log(heading);
console.log(heading.classList);

// querySelectorAll: Cero hasta todos los elementos que sean iguales al selector

const enlaces = document.querySelectorAll(".navegacion a"); // Selecciona todos los enlaces
const primerEnlace = enlaces[0];
console.log(enlaces);
console.log(primerEnlace);

// getElementById:

const heading2 = document.getElementById("heading");
console.log(heading2);

/* ********************************** Crear contenido ********************************** */

const nuevoEnlace = document.createElement('A');
console.log(nuevoEnlace);

nuevoEnlace.href = 'nuevo-enlace.html'; // Agregar href
nuevoEnlace.textContent = 'Tienda Virtual';
nuevoEnlace.classList.add('navegacion__enlace');
console.log(nuevoEnlace);

// Agregar el nuevo elemento al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

/* ********************************** Eventos ********************************** */
// Evento a la ventana
console.log(1);
window.addEventListener('load', () => { // load espera a que el Js y los archivos que dependen del HTML esten listos
    console.log(2); // Cuando haya cargado totalmente la ventana.
}); 
console.log(3);

window.onscroll = () => console.log("Scrolling..."); // Al momento de hacer scroll

// Evento al document
document.addEventListener('DOMContentLoaded', () => { // DOMContentLoaded solamente espera a que carga el html
    console.log(4);
})
console.log(5);

// Seleccionar un elemento y asignarle un elemento: Click
// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click', (evento) => { // Evento para el click
//     console.log(evento);
//     evento.preventDefault(); // Quitar la accion por default del submit para que no recargue la pagina
//     console.log('Enviando formulario..')
// })

// Eventos de los inputs y text area

const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const mail = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('change', () => console.log('Cuando escribo y salgo del input...'));
nombre.addEventListener('input', leerTexto); // Valida cada caracter que el usario va escribiedno en tiempo real

mail.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

// Elemento de submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();
    // Validar el formulario
    const {nombre, email, mensaje} = datos;

    if (nombre === ''){
        mostrarAlerta("El nombre esta vacio.");
        return;
    } else if (email === ''){
        mostrarAlerta("El email esta vacio.");
        return;
    } else if (mensaje === ''){
        mostrarAlerta("El mensaje esta vacio.");
        return;
    }

    mostrarAlerta('Formulario Enviado Correctamente', true);
})

function mostrarAlerta(mensaje, correcto=false) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (correcto){
        alerta.classList.add('correcto');
    } else{
        alerta.classList.add('error');
    }
    formulario.appendChild(alerta);
    
    // Desaparecer despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}