document.addEventListener('DOMContentLoaded', function(){

    addEventListeners();
    darkMode();
});

// Navegacion responsive

function addEventListeners() {
    const mobileMenu = document.querySelector('.mobile_menu');
    mobileMenu.addEventListener('click', navegacionResponsive );
};

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    if (navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    } else{
        navegacion.classList.add('mostrar');
    }
}

// Dark mode 

function darkMode() {
    const botonDark = document.querySelector('.dark_mode_boton');
    botonDark.addEventListener('click', cambiarMode );
}

function cambiarMode() {
    document.body.classList.toggle('dark_mode');
}