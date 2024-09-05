<?php include 'includes/header.php';

$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200,
    'informacion' => [
        'tipo' => 'premium'
    ] 
];

echo "<pre>";
var_dump($cliente);
echo "</pre>";

echo "Acceder a valor: ";
echo($cliente['nombre']);
echo "<br>";
echo($cliente['saldo']);
echo "<br>";
echo($cliente['informacion']['tipo']);
echo "<br>";

echo "Agregar propiedad: ";
$cliente['codigo'] = 1; // Como no existe, la agrega
echo "<pre>";
var_dump($cliente);
echo "</pre>";

include 'includes/footer.php';