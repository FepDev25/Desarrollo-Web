<?php

$hostname = 'localhost';
$username = 'root';
$pasword = 'mariapaz28';

$db = mysqli_connect($hostname, $username, $pasword, 'appsalon');

if (!$db){
    echo "Hubo un error";
    exit;
} else{
    echo "Conexion exitosa";
}

//echo "<pre>";
//var_dump($db);
//echo "</pre>";