<?php include 'includes/header.php';

function usuarioAutenticado(bool $autenticado) : String {
    return ($autenticado) ? "El usuario esta autenticado" : "El usuario no esta autenticado";
}

$user1 = usuarioAutenticado(true);
echo $user1;

echo "<br>";

$user2 = usuarioAutenticado(false);
echo $user2;

include 'includes/footer.php';