<?php

function obtener_servicios(){
    try {
        // Importar las credenciales de conexion
        require 'database.php';

        // Consulta sql
        $sql = "SELECT * FROM servicios;";

        // Realizar consulta previa
        $resultado = mysqli_query($db, $sql);

        // Cerrar la conexion
        mysqli_close($db);

        return $resultado;
    } catch (\Throwable $th){
        var_dump($th);
    }
}

obtener_servicios();