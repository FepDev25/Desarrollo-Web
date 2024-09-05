<?php include 'includes/header.php';

// buscar elementos en un arreglo
$carrito = ['Tablet', 'Computadora', 'TV'];
echo "Array: [" . $carrito[0] . ", " . $carrito[1] . ", " . $carrito[2] . "]";
echo "<br>";
echo "Contiene Tablet? ";
var_dump(in_array('Tablet', $carrito));
echo "<br>";
echo "Contiene Reloj? ";
var_dump(in_array('Reloj', $carrito));
echo "<br>";

// Ordenar elementos de un arreglo
$numeros = [9,5,1,2,0,7,1];
echo "Array: ";
for ($i = 0; $i < 7; $i++) {
    echo "{$numeros[$i]}";
}
sort($numeros);
echo "<br>";
echo "Ordenado: ";
for ($i = 0; $i < 7; $i++) {
    echo "{$numeros[$i]}";
}
rsort($numeros);
echo "<br>";
echo "Ordenado reverse: ";
for ($i = 0; $i < 7; $i++) {
    echo "{$numeros[$i]}";
}
echo "<br>";

// Ordenar arreglo asociativo 
$cliente = array(
    'saldo' => 300,
    'tipo' => 'Premium',
    'nombre' => 'Felipe'
);
echo "<pre>";
var_dump($cliente);
echo "</pre>";
asort($cliente); // Ordena por valores
echo "<pre>";
var_dump($cliente);
echo "</pre>";
arsort($cliente); // Ordena por valores reverso
echo "<pre>";
var_dump($cliente);
echo "</pre>";
ksort($cliente); // Ordena por llaves
echo "<pre>";
var_dump($cliente);
echo "</pre>";
krsort($cliente); // Ordena por llaves reverso
echo "<pre>";
var_dump($cliente);
echo "</pre>";

include 'includes/footer.php';