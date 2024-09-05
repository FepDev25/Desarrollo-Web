<?php include 'includes/header.php';

$a = 10;
$b = 20;

echo "a: " . $a;
echo "<br>";
echo "b: " . $b;
echo "<br>";
if ($a > $b) {
    echo "a is bigger than b";
} elseif ($a == $b) {
    echo "a is equal to b";
} else {
    echo "a is smaller than b";
}
echo "<br>";

$autenticado = false;
$admin = false  ;

if ($autenticado && $admin){
    echo "Entrado autenticado y como admin";
} else if ($autenticado){
    echo "Entrado autenticado";
} else if ($admin){
    echo "Entrado admin";
} else{
    echo "No puede entrar";
}
echo "<br>";

$numeros = [];
if (!empty($numeros)){
    echo "El arreglo no esta vacio";
} else{
    echo "El arregloe esta vacio";
}
echo "<br>";

$x = 8;
switch ($x) {
    case '0':
        print "it's zero";
        break; 
    case '2':
        print "it's two";
        break;
    case '3':
        print "it's 3";
        break;
    default:
        print "it's ?";
        break;
}
echo "<br>";

$statusCode = 500;
$message = match($statusCode) {
    200, 300 => null,
    400 => 'not found',
    500 => 'server error',
    default => 'known status code',
};
echo $message; # => server error
echo "<br>";

$age = 23;
$result = match (true) {
    $age >= 65 => 'senior',
    $age >= 25 => 'adult',
    $age >= 18 => 'young adult',
    default => 'kid',
};
echo $result; # => young adult
echo "<br>";

$cliente = [
    'nombre' => 'Felipe',
    'saldo' => 0
];

if ($cliente['saldo'] >= 0 && $cliente['saldo'] <= 100){
    echo "Cantidad de dinero entre 0 y 100";
} else if ($cliente['saldo'] > 100 && $cliente['saldo'] <= 200){
    echo "Cantidad de dinero entre 100 y 200";
} else if ($cliente['saldo'] > 200 && $cliente['saldo'] <= 300){
    echo "Cantidad de dinero entre 200 y 300";
} else if ($cliente['saldo'] > 300){
    echo "Cantidad de dinero entre mayor a 300";
} else{
    echo "Saldo negativo";
}

include 'includes/footer.php';