<?php include 'includes/header.php';

$nombre = "Felipe Peralta";

echo "Cadena: ";
echo $nombre;
echo "<br>";

echo "Conocer extensión de un string: ";
echo strlen($nombre);
echo "<br>";

$nombre2 = "                Eden Hazard             ";
echo "Cadena: ";
var_dump($nombre2);
echo "<br>";
echo "Eliminar espacios en blanco: ";
$texto = trim($nombre2);
var_dump($texto);
echo "<br>";

echo "Convertir a mayúsculas: ";
echo strtoupper($nombre);
echo "<br>";

echo "Convertir a minúsculas: ";
echo strtolower($nombre);
echo "<br>";

echo "Reemplazar: ";
echo str_replace("Felipe", "Bruno", $nombre);
echo "<br>";

echo "Revisar si un string existe: ";
echo strpos($nombre, "Peral");
echo "<br>";

echo "Concatenar: ";
echo "<br>";
echo "El cliente se llama " . $nombre . " y esta fue una prueba de concatenación";
echo "<br>";
echo "El cliente se llama {$nombre} y esta fue una prueba de concatenación";
echo "<br>";

echo "Invertir cadena: ";
echo strrev($nombre);
echo "<br>";

echo "Repetir cadena: ";
echo str_repeat($nombre, 2);
echo "<br>";

echo "Obtener una subcadena (primeros 6 caracteres): ";
echo substr($nombre, 0, 6);
echo "<br>";

echo "Convertir primera letra en mayúscula: ";
echo ucfirst($nombre);
echo "<br>";

$nombre3 = "bruno diaz";
echo "Cadena: ";
var_dump($nombre3);
echo "<br>";
echo "Convertir primera letra de cada palabra en mayúscula: ";
echo ucwords($nombre3);
echo "<br>";

echo "Comparar cadenas (strcmp): ";
echo strcmp($nombre, "Felipe Peralta") === 0 ? "Son iguales" : "Son diferentes";
echo "<br>";

echo "Convertir string en un array: ";
$array_nombre = explode(" ", $nombre);
print_r($array_nombre);
echo "<br>";

echo "Convertir array en string: ";
echo implode("-", $array_nombre);
echo "<br>";

include 'includes/footer.php';
?>
