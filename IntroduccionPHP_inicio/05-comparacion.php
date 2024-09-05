<?php include 'includes/header.php';

$n1 = 20;
$n2 = 10;
$n3 = 20;
$n4 = "20";

var_dump($n1 > $n2);
echo "<br>";

var_dump($n1 < $n2);
echo "<br>";

var_dump($n1 >= $n3);
echo "<br>";

var_dump($n1 == $n3);
echo "<br>";

var_dump($n1 == $n4);
echo "<br>";

var_dump($n1 === $n4);
echo "<br>";

var_dump(4 <=> 9);
echo "<br>";

var_dump(9 <=> 4);
echo "<br>";

var_dump(4 <=> 4);
echo "<br>";

include 'includes/footer.php';