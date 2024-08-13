// Estructuras de control

// ********************* If *********************
console.log("If: ")

const puntaje1 = 1000;
const puntaje2 = 502;
const puntaje3 = 699;
const puntaje4 = 30;


function evauarPuntaje(puntaje) {
    console.log(`Puntaje: ${puntaje}`)
    if (puntaje > 700){
        console.log("El puntaje es mayor a 700");
    } else if (puntaje > 500){
        console.log("El puntaje es mayor a 500 pero menor a 700");
    } else{
        console.log("El puntaje es menor a 500")
    }

    if (puntaje !== 700){
        console.log("El puntaje es diferente de 700.")
    } else{
        console.log("El puntaje es de 700.")
    }
}
evauarPuntaje(puntaje1);
evauarPuntaje(puntaje2);
evauarPuntaje(puntaje3);
evauarPuntaje(puntaje4);


const efectivo = 1000;
const carrito = 1000;

if (efectivo > carrito){
    console.log("Puede pagar");
} else if (efectivo === carrito){
    console.log("Pagas con lo justo");
}else{
    console.log("Insuficiente dinero");
}

// ********************* Switch *********************

const metodoPago = "Bitcoin";

switch (metodoPago) {
    case "Tarjeta":
        console.log("Pagando con tarjeta....")
        break;
    case "Efectivo":
        console.log("Pagando con Efectivo....")
        break;
    case "Bitcoin":
        console.log("Pagando con Bitcoin....")
        break;
    case "Cheque":
        console.log("Pagando con Cheque....")
        break;
    default:
        console.log("No se especifica el metodo de pago")
        break;
}