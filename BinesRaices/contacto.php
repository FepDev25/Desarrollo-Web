<?php 
    require 'includes/funciones.php';
    incluirTemplate('header');
?>

    <main class="contenedor seccion">
        <h1>Contacto</h1>

        <picture>
            <source srcset="build/img/destacada3.webp" type="image/webp">
            <source srcset="build/img/destacada3.jpg" type="image/jpeg">
            <img loading="lazy" src="build/img/destacada3.jpg" alt="Imagen de la propiedad">
        </picture>

        <h2>Llene el formulario de contacto</h2>
        <form class="formulario">
            <fieldset>
                <legend>Informacion personal</legend>

                <label for="nombre">Nombre</label>
                <input id="nombre" type="text" placeholder="Tu nombre">

                <label for="email">Email</label>
                <input id="email" type="email" placeholder="Tu email">

                <label for="telefono">Telefono</label>
                <input id="telefono" type="tel" placeholder="Tu telefono">

                <label for="mensaje">Telefono</label>
                <textarea id="mensaje" placeholder="Tu mensaje"></textarea>
            </fieldset>

            <fieldset>
                <legend>Informacion sobre la propiedad</legend>

                <label for="opciones">Vende o compra</label>
                <select id="opciones">
                    <option value="" disabled selected>-- Seleccione --</option>
                    <option value="Vende">Vende</option>
                    <option value="Compra">Compra</option>
                </select>

                <label for="presupuesto">Precio o Presupuesto</label>
                <input id="presupuesto" type="number" placeholder="Tu precio o presupuesto">
            </fieldset>

            <fieldset>
                <legend>Informacion sobre la propiedad</legend>

                <p>Como desea ser contactado</p>

                <div class="forma_contacto">
                    <label for="contactar_telefono">Telefono</label>
                    <input name="contacto" id="contactar_telefono" type="radio" value="telefono">

                    <label for="contactar_email">Email</label>
                    <input name="contacto" id="contactar_email" type="radio" value="email">
                </div>

                <p>Si eligió teléfono, elija la fecha y la hora</p>

                <label for="fecha">Fecha</label>
                <input id="fecha" type="date">

                <label for="hora">Hora</label>
                <input type="time" id="hora" min="09:00" max="18:00">

            </fieldset>

            <input type="submit" value="Enviar" class="boton_verde">
        </form>
    </main>

<?php incluirTemplate('footer');?>