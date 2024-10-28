<?php 
    require '../../includes/config/database.php';
    $db = conectarDB();

    // Arreglo con mensaje de errores
    $errores = [];

    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        $titulo = $_POST['titulo'];
        $precio = $_POST['precio'];
        $descripcion = $_POST['descripcion'];
        $habitaciones = $_POST['habitaciones'];
        $wc = $_POST['wc'];
        $estacionamiento = $_POST['estacionamiento'];
        $vendedor = $_POST['vendedor'];
        $vendedor_int = intval($vendedor);

        if (!$titulo){
            $errores[] = "Debes de agregar un tituo.";
        }
        if (!$precio){
            $errores[] = "El precio es obligatorio.";
        }
        if (strlen($descripcion) < 50){
            $errores[] = "La descripcion es obligatoria y debe tener al menos 50 caracteres.";
        }
        if (!$habitaciones){
            $errores[] = "El numero de habitaciones es obligatorio.";
        }
        if (!$wc){
            $errores[] = "El numero de baños es obligatorio.";
        }
        if (!$estacionamiento){
            $errores[] = "El numero de estacionamientos es obligatorio.";
        }
        if (!$vendedor){
            $errores[] = "Elige un vendedor.";
        }

        //echo "<pre>";
        //var_dump($errores);
        //echo "</pre>"; 

        if (empty($errores)){
            // Insertar en la base de datos
            $query = "INSERT INTO propiedades (titulo, precio, descripcion, habitaciones, wc, estacionamiento, vendedores_id)
            VALUES ('$titulo', '$precio', '$descripcion', '$habitaciones', '$wc', '$estacionamiento', '$vendedor_int');";

            $resultado = mysqli_query($db, $query);
            if ($resultado){
                echo "Insertado correctamente";
            }
        }
    };

    
    require '../../includes/funciones.php';
    incluirTemplate('header');
?>

    <main class="contenedor seccion">
        <h1>Crear</h1>

        <a href="/admin/index.php" class="boton boton_verde">Volver</a>

        <?php foreach($errores as $error): ?>
            <div class="alerta error">
                <?php echo $error ?>
            </div>
        <?php endforeach ?>

        <form class="formulario" method="POST" action="/admin/propiedades/crear.php">
            <fieldset>
                <legend>Información general</legend>

                <label for="titulo">Titulo:</label>
                <input type="text" id="titulo" name="titulo" placeholder="Titulo de la propiedad">

                <label for="precio">Precio:</label>
                <input type="number" id="precio" name="precio" placeholder="Precio de la propiedad">

                <label for="imagen">Imagen:</label>
                <input type="file" id="imagen" accept="image/jpeg, image/png">

                <label for="descripcion">Descripcion:</label>
                <textarea id="descripcion" name="descripcion" placeholder="Descripcion de la propiedad"></textarea>
            </fieldset>

            <fieldset>
            <legend>Información de la propiedad</legend>

                <label for="habitaciones">Habitaciones:</label>
                <input type="number" id="habitaciones" name="habitaciones" placeholder="Ej: 3" min="1" max="9">

                <label for="wc">Baños:</label>
                <input type="number" id="wc" name="wc" placeholder="Ej: 3" min="1" max="9">

                <label for="estacionamiento">Estacionamiento:</label>
                <input type="number" id="estacionamiento" name="estacionamiento" placeholder="Ej: 3" min="1" max="9">
            </fieldset>

            <fieldset>
                <legend>Vendedor</legend>

                <select name="vendedor">
                    <option value="">-- Seleccione --</option>
                    <option value="1">Felipe</option>
                    <option value="2">Karen</option>
                </select>
            </fieldset>

            <input type="submit" value="Crear propiedad" class="boton boton_verde">
        </form>
    </main>

<?php incluirTemplate('footer');?>