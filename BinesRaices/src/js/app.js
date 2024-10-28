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
    const prefierOsucro = window.matchMedia(('prefers-color-sheme: dark'));
    
    if (prefierOsucro.matches){
        document.body.classList.add('dark_mode');
    } else{
        document.body.classList.remove('dark_mode');
    }

    prefierOsucro.addEventListener('change', function () {
        if (prefierOsucro.matches){
            document.body.classList.add('dark_mode');
        } else{
            document.body.classList.remove('dark_mode');
        }
    })


    const botonDark = document.querySelector('.dark_mode_boton');
    botonDark.addEventListener('click', cambiarMode );
}

function cambiarMode() {
    document.body.classList.toggle('dark_mode');
}