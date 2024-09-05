<?php include 'includes/header.php';

$carrito = ['Tablet', 'TV', 'Iphone'];
echo "<pre>";
var_dump($carrito);
echo "</pre>";

$numeros = array(19,25,10);
echo "<pre>";
var_dump($numeros);
echo "</pre>";

echo "Acceder elementos al arreglo: ";
echo "<br>";
echo $carrito[2];
echo "<br>";
echo $numeros[1];
echo "<br>";

echo "Agregar elementos al arreglo: ";
$carrito[3] = "Cocina";
array_unshift($carrito, 'Smart TV');
array_push($carrito, 'Audifonos');
echo "<pre>";
var_dump($carrito);
echo "</pre>";

include 'includes/footer.php';