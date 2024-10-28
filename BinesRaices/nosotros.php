<?php 
    require 'includes/funciones.php';
    incluirTemplate('header');
?>

    <main class="contenedor seccion nosotros">
        <h1>Conoce sobre nosotros</h1>

        <div class="nosotros_contenedor">
            <div class="nosotros_imagen">
                <picture>
                    <source srcset="build/img/nosotros.webp" type="image/webp">
                    <source srcset="build/img/nosotros.jpg" type="image/jpeg">
                    <img loading="lazy" src="build/img/nosotros.jpg" alt="Texto entrada blog">
                </picture>
            </div>
                
            <div class="nosotros_contenido">
                <blockquote>
                    25 años de experiencia
                </blockquote>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut quam quod, totam facere pariatur in praesentium sit, voluptatem explicabo suscipit commodi facilis, veritatis hic sunt beatae ea earum aperiam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam explicabo, voluptate ex eaque dolorum iusto natus inventore alias quos maiores consequuntur cum doloremque optio ipsa minus, laudantium ducimus illo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus illo voluptas aliquid aspernatur corrupti sit obcaecati quos enim, quaerat fugit exercitationem iusto atque cumque ipsum numquam nostrum voluptatum. Fugiat?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut quam quod, totam facere pariatur in praesentium sit, voluptatem explicabo suscipit commodi facilis, veritatis hic sunt beatae ea earum aperiam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus illo voluptas aliquid aspernatur corrupti sit obcaecati quos enim, quaerat fugit exercitationem iusto atque cumque ipsum numquam nostrum voluptatum. Fugiat?
                </p>
            </div>
        </div>
    </main>

    <section class="contenedor seccion">
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
    </section>

<?php incluirTemplate('footer');?>