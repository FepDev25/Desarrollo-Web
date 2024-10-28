<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienes Raices</title>
    <link rel="stylesheet" href="/build/css/app.css">
</head>
<body>
    
    <header class="header <?php echo $inicio ? 'inicio' : '' ?> ">
        <div class="contenedor contenido_header">
            <div class="barra">
                <a class="logo" href="/">
                    <img src="/build/img/logo.png" alt="Logotipo de bienes Raices">
                </a>

                <div class="mobile_menu">
                    <img src="/build/img/barras.svg" alt="icono menu responsive">
                </div>

                <div class="derecha">
                    <img class="dark_mode_boton" src="/build/img/dark-mode.png">
                    <nav class="navegacion">
                        <a href="nosotros.php">Nosotros</a>
                        <a href="anuncios.php">Anuncios</a>
                        <a href="blog.php">Blog</a>
                        <a href="contacto.php">Contacto</a>
                    </nav>
                </div>
                
            </div> <!-- Fin barra de navegacion -->
        </div>
    </header>