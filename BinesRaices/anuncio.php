<?php 
    require 'includes/funciones.php';
    incluirTemplate('header');
?>

    <main class="contenedor seccion contenido-centrado">
        <h1>Casa en venta frente al bosque</h1>

        <picture>
            <source srcset="build/img/destacada.webp" type="image/webp">
            <source srcset="build/img/destacada.jpg" type="image/jpeg">
            <img loading="lazy" src="build/img/destacada.jpg" alt="Imagen de la propiedad">
        </picture>

        <div class="resumen_propiedad">
            <p class="precio">$3,000,000</p>
            <ul class="iconos_caracteristicas">
                <li>
                    <img class="icono" loading="lazy" src="build/img/icono_wc.svg" alt="icono wc">
                    <p>3</p>
                </li>
                <li>
                    <img class="icono" loading="lazy" src="build/img/icono_estacionamiento.svg" alt="icono estacionamiento">
                    <p>3</p>
                </li>
                <li>
                    <img class="icono" loading="lazy" src="build/img/icono_dormitorio.svg" alt="icono dormitorio">
                    <p>4</p>
                </li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus excepturi ipsa provident nihil quam natus cumque adipisci ea at dicta necessitatibus dolore nemo, dolorem, quaerat aspernatur dolorum vero laudantium nulla.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia, quisquam consequuntur quas quasi mollitia provident animi corrupti fugiat, officiis itaque optio recusandae a voluptas. Maxime fuga fugiat ad saepe.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis unde facere accusantium quam, omnis totam ea quis illo saepe vitae amet eaque illum sequi! Temporibus exercitationem facilis ratione perspiciatis architecto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, et! At dignissimos pariatur fugit quis sapiente laboriosam odio praesentium maxime aut labore porro placeat sed error similique, officia unde itaque!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel fugit, illo necessitatibus quaerat repudiandae laborum debitis totam? Dicta ullam, illo, fugiat fugit soluta ea, magnam debitis optio ab recusandae laudantium!
                orem ipsum dolor sit amet consectetur, adipisicing elit. Minus excepturi ipsa provident nihil quam natus cumque adipisci ea at dicta necessitatibus dolore nemo, dolorem, quaerat aspernatur dolorum vero laudantium nulla.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia, quisquam consequuntur quas quasi mollitia provident animi corrupti fugiat, officiis itaque optio recusandae a voluptas. Maxime fuga fugiat ad saepe.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis unde facere accusantium quam, omnis totam ea quis illo saepe vitae amet eaque illum sequi! Temporibus exercitationem facilis ratione perspiciatis architecto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>
    </main>

 <?php incluirTemplate('footer');?>