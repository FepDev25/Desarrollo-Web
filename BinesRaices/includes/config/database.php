<?php

function conectarDB() : mysqli{
    $url = "localhost";
    $user = "root";
    $pass = "mariapaz28";
    $base = "bienesraices";

    $db = mysqli_connect($url, $user, $pass, $base);

    if (!$db){
        echo "Error, no se pudo conectar a la base de datos.";
        exit;
    }

    return $db;
}