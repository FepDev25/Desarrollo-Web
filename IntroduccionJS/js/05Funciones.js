// Funciones

// IIFE
(function() {
    // Código que se ejecuta inmediatamente
    console.log("Esto es un IIFE");
})();

// Metodos y funciones
const numero1 = 20;
const numero2 = "20";
console.log(parseInt(numero2)); // Funcion
console.log(numero1.toString()) // Metodo

// Declaracion de funcion

function sumar(num1=0, num2=0) {
    return num1 + num2;
};

let suma1 = sumar(6,2);
console.log(suma1)

// Expresion de la funcion
const sumar2 = function (num1, num2) {
    return num1 + num2;
};


let suma2 = sumar2(7,9);
console.log(suma2)

// Mas funciones
let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}
function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(100);
total = agregarCarrito(50);
total = agregarCarrito(250);
total = agregarCarrito(20);
console.log("Total: " + total);
console.log("Total con impuesto: " + calcularImpuesto(total));

// Metodos de propiedad

const reproductor = {
    reproducir : function (id) {
        console.log(`Reproduciendo cancion: ${id}`);
    },

    pausa : function () {
        console.log("Pausando...")
    },

    crearPlayList : function (nombre) {
        console.log(`Creando playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function (id) {
    console.log(`Borrando cancion: ${id}`);
}

reproductor.reproducir(34);
reproductor.reproducir(42);
reproductor.reproducir(12);
reproductor.pausa();
reproductor.borrarCancion(89);
reproductor.crearPlayList("Progresive Rock");

// Arrow Functions
console.log("Arroz Functions: ");

const sumador = (n1, n2) => {
    return n1 + n2;
} 

const sumadorCorto = (n1, n2) => n1+n2; // Return implicito

console.log(sumador(10,18));
console.log(sumadorCorto(10,18));

const aprender = tecnologia => console.log(`Aprendiendo tecnologia: ${tecnologia}`);
aprender('JavaScript');

const carrito = [
    {nombre: 'Monitor 50 pulgadas' , precio : 500},
    {nombre: 'Television 50 pulgadas' , precio : 700},
    {nombre: 'Samsung Galaxy S24' , precio : 1200},
    {nombre: 'Iphone 15' , precio : 2000},
    {nombre: 'Teclado BT' , precio : 100},
    {nombre: 'Samsung Galaxy S23' , precio : 980},
    {nombre: 'Cargados Tipo c' , precio : 20},
    {nombre: 'Iphone XS' , precio : 1000},
    {nombre: 'Samsung Galaxy S10' , precio : 400},
    {nombre: 'Iphone XR' , precio : 1100},
];

carrito.forEach ( producto => {
    console.log(producto);
})

let resultado = carrito.some (producto => producto.nombre.startsWith('Samsung'));
console.log(resultado);

resultado = carrito.reduce( (total, producto) => total += producto.precio, 0);
console.log(resultado);

resultado = carrito.filter( producto => producto.precio < 400);
console.log(resultado);

resultado = carrito.filter( producto => !producto.nombre.startsWith('Iphone'));
console.log(resultado);