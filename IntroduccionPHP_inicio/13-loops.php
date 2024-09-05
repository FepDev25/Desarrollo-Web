<?php include 'includes/header.php';

// While
$i = 0 ;
while ($i < 11){
    echo "{$i} ";
    $i ++;
}
echo "<br>";

// Do while
do{
    echo "{$i} ";
    $i ++;
} while($i < 21);
echo "<br>";

// For
for ($i; $i <31 ; $i++) { 
    echo "{$i} ";
}
echo "<br><br>";

for ($i=0; $i < 101; $i++) { 
    if ($i % 3 == 0 && $i % 5 == 0){
        echo $i . " FizzBuzz";
    } else if ($i % 3 == 0){
        echo $i . " fizz";
    } else if ($i % 5 == 0){
        echo $i . " fizz";
    } else{
        echo $i;
    }
    echo "<br>";
}
echo "<br>";

// ForEach

$clientes = ['Pedro', 'Juan', 'Karen'];

foreach($clientes as $cliente){
    echo $cliente . "<br>";
}
echo "<br>";

for ($i = 0; $i < count($clientes); $i++){
    echo $clientes[$i] . "<br>";
}
echo "<br>";

$cliente = [
    'nombre' => 'Felipe',
    'saldo' => 200,
    'tipo' => 'Premium'
];
foreach($cliente as $valor){
    echo $valor . "<br>";
}
echo "<br>";

foreach($cliente as $llave => $valor){
    echo $llave . "=>" . $valor . "<br>";
}
echo "<br>";


include 'includes/footer.php';