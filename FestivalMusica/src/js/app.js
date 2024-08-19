document.addEventListener('DOMContentLoaded', function () {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre_festival');

    document.addEventListener('scroll', () => {
        // Revisa si un elemento ya no es visible en la pantalla
        if (sobreFestival.getBoundingClientRect().bottom < 1){ 
            header.classList.add('fixed');
        } else{
            header.classList.remove('fixed');
        }
    })
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria_imagenes');
    const cantidadImagenes = 16;
    for (let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = 'src/img/gallery/full/'+i+'.jpg';
        imagen.innerHTML = `
        <source srcset="build/img/gallery/full/${i}.avif" type="image/avif">
        <source srcset="build/img/gallery/full/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${i}.jpg" alt="imagen galeria">
        `;

        // Event Handler: Detectar y responder a una iteraccion del usuario
        imagen.onclick = function () {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(indice) {
    const imagen = document.createElement('IMG');
    imagen.loading = 'lazy';
    imagen.width = '300';
    imagen.height = '200';
    imagen.src = 'src/img/gallery/thumb/'+indice+'.jpg';
    imagen.alt = 'Imagen de galeria';

    // Generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    // Boton cerrar modal
    const cerrarModalBtn = document.createElement('button');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn_cerrar');
    cerrarModalBtn.onclick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);

    // Agregar al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow_hidden');
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade_out');

    setTimeout(() => {
        modal?.remove();
        const body = document.querySelector('body');
        body.classList.remove('overflow_hidden');
    }, 500);

    
}

function resaltarEnlace() {
    document.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const links = document.querySelectorAll('.nevegacion_principal a');
        let actual = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id;
            }
        })

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === "#"+actual){
                link.classList.add('active');
            }
        })
    })
}

function scrollNav() {
    const links = document.querySelectorAll('.nevegacion_principal a');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionsScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionsScroll);

            section.scrollIntoView({behavior : 'smooth'});
        })
    })
}