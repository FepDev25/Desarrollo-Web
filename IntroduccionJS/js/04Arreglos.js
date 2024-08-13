// Arreglos

const numeros = [10,20,30,40,50];
console.log(numeros);
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre');
console.log(meses);
console.table(meses);

const arreglo = ['Felipe', true, 10, null, {nombre : 'Mikey', raza : 'Putbull'}, [1,2,3,4,5]];
console.log(arreglo);
console.table(arreglo);

// Acceder a los valores de un arreglo
console.log(numeros[1]); // 20
console.log(meses[2]); // Marzo

// Conocer la extension de un arreglo
console.log(numeros.length); // 5

// Iterar un arreglo
console.log("Meses: ")
meses.forEach( function (mes) {
    console.log(mes);
})

// Modificar el arreglo
console.log("Agregar: ")
numeros[5] = 70; // Como no existe el indice, se agrega.
console.log(numeros);

numeros.push(90); // Agrega el nuevo valor al final
numeros.push(25);
numeros.push(100);
numeros.push(80);
console.log(numeros);

numeros.unshift(-10,-20,-30); // Agrega el nuevo valor al inicio
console.log(numeros);

console.log("Eliminar: ")
meses.pop(); // Elimina el ultimo elemento
console.log(meses);

meses.shift(); // Elimina el primer elemento
console.log(meses);

meses.splice(3, 1); // Eliminar elemento por su indice y cuantos se quiere eliminar \
console.log(meses);

// Rest y Sprend operator
console.log("Rest y Sprend operator: ");
const nuevoArreglo = [...meses, 'Septiembre'];
console.log(nuevoArreglo);
const nuevoArreglo2 = ['Enero', ...meses];
console.log(nuevoArreglo2);

// Mas metodos de arrays
console.log("Carrito: ")
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

carrito.forEach(function (producto) {
    console.log(producto);
});

// Includes
console.log("Includes: ");
const resultado = meses.includes("Marzo");
console.log("Meses contiene Marzo: " + resultado);
const resultado2 = meses.includes("Diciembre");
console.log("Meses contiene Diciembre: " + resultado2);

// Some, ideal para arreglo de objetos
let resultado3 = carrito.some(producto => producto.nombre === 'Samsung Galaxy S10');
console.log("Carrito contiene 'Samsung Galaxy S10': " + resultado3);

// Reduce
resultado3 = carrito.reduce(function (total, producto) {
    return total + producto.precio;
}, 0);
resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0); // Lo mismo pero un arrow function
console.log("Suma de precios: " + resultado3);

// Filter
resultado3 = carrito.filter(function (producto) {
    return producto.precio < 500;
})
console.log(resultado3);
resultado3 = carrito.filter(producto => producto.nombre.startsWith("Samsung"));
console.log(resultado3);

// Find
console.log("Find:");
let resultado4 = carrito.find(producto => producto.nombre === 'Iphone 15');
console.log("Producto encontrado: ", resultado4);

// Every
console.log("Every:");
let resultado5 = carrito.every(producto => producto.precio > 100);
console.log("Todos los productos son mayores a $100: " + resultado5);

// Concat
console.log("Concat:");
const otrosNumeros = [60, 70, 80];
const concatenado = numeros.concat(otrosNumeros);
console.log("Arreglos concatenados: ", concatenado);

// Join
console.log("Join:");
const mesesComoCadena = meses.join(', ');
console.log("Meses como cadena: ", mesesComoCadena);

// Slice
console.log("Slice:");
const primerTrimestre = meses.slice(0, 3);
console.log("Primer trimestre: ", primerTrimestre);

// Sort
console.log("Sort:");
const numerosOrdenados = [...numeros].sort((a, b) => a - b); // Para no modificar el original
console.log("Números ordenados: ", numerosOrdenados);

// Map
console.log("Map:");
const nombresProductos = carrito.map(producto => producto.nombre);
console.log("Nombres de productos: ", nombresProductos);

// Flat
console.log("Flat:");
const arregloAnidado = [1, 2, [3, 4], [5, [6, 7]]];
const arregloPlano = arregloAnidado.flat(2);
console.log("Arreglo plano: ", arregloPlano);

// Includes en números
console.log("Includes en números:");
const incluyeTreinta = numeros.includes(30);
console.log("El arreglo incluye el número 30: " + incluyeTreinta);

// Reverse
console.log("Reverse:");
const numerosReversa = [...numeros].reverse();
console.log("Arreglo en reversa: ", numerosReversa);
