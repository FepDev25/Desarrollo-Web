<?php 
    require 'includes/funciones.php';
    incluirTemplate('header', true);
?>


    <main class="contenedor seccion">
        <h1>Más sobre nosotros</h1>
        <div class="iconos_nosotros">
            <div class="icono">
                <img src="build/img/icono1.svg" alt="Icono seguridad" loading="lazy">
                <h3>Seguridad</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, alias corrupti doloribus consequuntur, at ea atque deserunt perferendis delectus autem illo corporis quas odit nostrum incidunt sed commodi accusamus aut.</p>
            </div>
            <div class="icono">
                <img src="build/img/icono2.svg" alt="Icono precio" loading="lazy">
                <h3>Precio</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, alias corrupti doloribus consequuntur, at ea atque deserunt perferendis delectus autem illo corporis quas odit nostrum incidunt sed commodi accusamus aut.</p>
            </div>
            <div class="icono">
                <img src="build/img/icono3.svg" alt="Icono tiempo" loading="lazy">
                <h3>Tiempo</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, alias corrupti doloribus consequuntur, at ea atque deserunt perferendis delectus autem illo corporis quas odit nostrum incidunt sed commodi accusamus aut.</p>
            </div>
        </div>
    </main>

    <section class="seccion contenedor"> 
        <h2>Casas y departamentos en venta</h2>
        <div class="contenedor_anuncios">
            <div class="anuncio">
                <picture>
                    <source srcset="build/img/anuncio1.webp" type="image/webp">
                    <source srcset="build/img/anuncio1.jpg" type="image/jpeg">
                    <img loading="lazy" src="build/img/anuncio1.jpg" alt="anuncio">
                </picture>
                <div class="contenido_anuncio">
                    <h3>Casa de Lujo en el lago</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia itaque id nesciunt est, provident tempora quaerat nihil fugit porro quidem saepe molestiae vel tempore labore quia perspiciatis ducimus maxime? Atque.</p>
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

                    <a class="boton_amarillo_block" href="anuncio.php">Ver Propiedad</a>
                </div> <!-- Contenido anuncio -->
            </div> <!-- Anuncio -->
            <div class="anuncio">
                <picture>
                    <source srcset="build/img/anuncio2.webp" type="image/webp">
                    <source srcset="build/img/anuncio2.jpg" type="image/jpeg">
                    <img loading="lazy" src="build/img/anuncio2.jpg" alt="anuncio">
                </picture>
                <div class="contenido_anuncio">
                    <h3>Casa terminados de lujo</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia itaque id nesciunt est, provident tempora quaerat nihil fugit porro quidem saepe molestiae vel tempore labore quia perspiciatis ducimus maxime? Atque.</p>
                    <p class="precio">$3,700,000</p>

                    <ul class="iconos_caracteristicas">
                        <li>
                            <img class="icono" loading="lazy" src="build/img/icono_wc.svg" alt="icono wc">
                            <p>2</p>
                        </li>
                        <li>
                            <img class="icono" loading="lazy" src="build/img/icono_estacionamiento.svg" alt="icono estacionamiento">
                            <p>2</p>
                        </li>
                        <li>
                            <img class="icono" loading="lazy" src="build/img/icono_dormitorio.svg" alt="icono dormitorio">
                            <p>3</p>
                        </li>
                    </ul>

                    <a class="boton_amarillo_block" href="anuncio.php">Ver Propiedad</a>
                </div> <!-- Contenido anuncio -->
            </div> <!-- Anuncio -->
            <div class="anuncio">
                <picture>
                    <source srcset="build/img/anuncio3.webp" type="image/webp">
                    <source srcset="build/img/anuncio3.jpg" type="image/jpeg">
                    <img loading="lazy" src="build/img/anuncio3.jpg" alt="anuncio">
                </picture>
                <div class="contenido_anuncio">
                    <h3>Casa con alberca</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia itaque id nesciunt est, provident tempora quaerat nihil fugit porro quidem saepe molestiae vel tempore labore quia perspiciatis ducimus maxime? Atque.</p>
                    <p class="precio">$2,500,000</p>

                    <ul class="iconos_caracteristicas">
                        <li>
                            <img class="icono" loading="lazy" src="build/img/icono_wc.svg" alt="icono wc">
                            <p>4</p>
                        </li>
                        <li>
                            <img class="icono" loading="lazy" src="build/img/icono_estacionamiento.svg" alt="icono estacionamiento">
                            <p>4</p>
                        </li>
                        <li>
                            <img class="icono" loading="lazy" src="build/img/icono_dormitorio.svg" alt="icono dormitorio">
                            <p>4</p>
                        </li>
                    </ul>

                    <a class="boton_amarillo_block" href="anuncio.php">Ver Propiedad</a>
                </div> <!-- Contenido anuncio -->
            </div> <!-- Anuncio -->
        </div> <!-- Contenedor anuncios -->
        <div class="alinear_derecha">
            <a class="boton_verde" href="anuncios.php">Ver todas</a>
        </div>
    </section>

    <section class="imagen_contacto">
        <h2>Encuentra la casa de tus sueños</h2>
        <p>Llena el formulario de contacto y un acesor se comunicará contigo en brevedad.</p>
        <a href="contacto.php" class="boton_amarillo">Contáctanos</a>
    </section>

    <div class="contenedor seccion seccion_inferior">
        <section class="blog">
            <h3>Nuestro Blog</h3>

            <article class="entrada_blog">
                <div class="imagen">
                    <picture>
                        <source srcset="build/img/blog1.webp" type="image/webp">
                        <source srcset="build/img/blog1.jpg" type="image/jpeg">
                        <img loading="lazy" src="build/img/blog1.jpg" alt="Texto entrada blog">
                    </picture>
                </div>

                <div class="texto_entrada">
                    <a href="entrada.php">
                        <h4>Terraza en el techo de tu casa</h4>
                        <p class="informacion_meta">Escrito en <span>05/09/2024</span> por <span>Admin</span></p>
                        <p>Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero.</p>
                    </a>
                </div>
            </article>

            <article class="entrada_blog">
                <div class="imagen">
                    <picture>
                        <source srcset="build/img/blog2.webp" type="image/webp">
                        <source srcset="build/img/blog2.jpg" type="image/jpeg">
                        <img loading="lazy" src="build/img/blog2.jpg" alt="Texto entrada blog">
                    </picture>
                </div>

                <div class="texto_entrada">
                    <a href="entrada.php">
                        <h4>Guía para la decoración de tu hogar</h4>
                        <p class="informacion_meta">Escrito en <span>05/09/2024</span> por <span>Admin</span></p>
                        <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio.</p>
                    </a>
                </div>
            </article>

            <article class="entrada_blog">
                <div class="imagen">
                    <picture>
                        <source srcset="build/img/blog3.webp" type="image/webp">
                        <source srcset="build/img/blog3.jpg" type="image/jpeg">
                        <img loading="lazy" src="build/img/blog3.jpg" alt="Texto entrada blog">
                    </picture>
                </div>

                <div class="texto_entrada">
                    <a href="entrada.php">
                        <h4>Guía para la decoración de tu hogar</h4>
                        <p class="informacion_meta">Escrito en <span>05/09/2024</span> por <span>Admin</span></p>
                        <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio.</p>
                    </a>
                </div>
            </article>
        </section>

        <section class="testimoniales">
            <h3>Testimoniales</h3>
            <div class="testimonial">
                <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laudantium maxime placeat doloremque illum iusto ipsa, nihil deserunt eum. Sint suscipit expedita repellat doloremque aspernatur ut hic nesciunt odio iure.
                </blockquote>
                <p>-Felipe Peralta.</p>
            </div>
        </section>
    </div>

<?php incluirTemplate('footer');?>