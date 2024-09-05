<?php include 'includes/header.php';

$clientes = [];
$clientes2 = array();
$clientes3 = array('Diego', 'Bruno', 'Mikey');

// empty revisa si un arreglo esta vacio;
echo "Empty: ";
echo"<br>";
var_dump(empty($clientes));
echo"<br>";
var_dump(empty($clientes2));
echo"<br>";
var_dump(empty($clientes3));
echo"<br>";

// isset resvisa si un arreglo esta creado o una propieda esta definida
echo "Isset: ";
echo"<br>";
var_dump(isset($clientes));
echo"<br>";
var_dump(isset($clientes2));
echo"<br>";
var_dump(isset($clientes4));
echo"<br>";

$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200,
    'informacion' => [
        'tipo' => 'premium'
    ] 
];

// isset resvisa si una propieda de un arreglo asociativo existe
var_dump(isset($cliente['nombre']));
echo"<br>";
var_dump(isset($cliente['apellido']));
echo"<br>";

include 'includes/footer.php';