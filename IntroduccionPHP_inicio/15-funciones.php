<?php 

include 'includes/header.php';

function sumar(int $n1=0, int $n2=0){
    echo $n1 + $n2;
    echo "<br>";
}

sumar(3,4);
sumar(1,2);
sumar(45,400);
sumar(-8,30);
sumar(1);
sumar();

include 'includes/footer.php';