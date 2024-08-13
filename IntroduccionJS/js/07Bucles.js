// Bucles

// ***************** For *****************

for (let x = 0; x < 11; x++) {
    console.log(x);
}

console.log("For loop: ")
let nombres = ['Felipe', 'Paz', 'Nube', 'Karen', 'Diego', 'Bruno'];
for (let i = 0; i < nombres.length; i++) {
    console.log(`Nombre admitido: ${nombres[i]}`);
}

// Par impar
for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(`Par: ${i}`)
    } else{
        console.log(`Impar: ${i}`)
    };
}

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

for (let i = 0; i < carrito.length; i++) {
    const element = carrito[i];
    console.log(element)
}

// ***************** While *****************

console.log("While: ")
let indice = 0;
while (indice <= 10){
    console.log(indice);
    indice ++;
}

// ***************** Do While *****************
console.log("Do While: ")
indice = 0;
do { // Ejecuta el codigo al menos una vez y luego ejecuta
    console.log(indice);
    indice ++;
} while (indice <= 10);


// ForEach
console.log("Foreach: ")
nombres.forEach(nombre => console.log(`Nombre admitido: ${nombre}`));

nombres.forEach(function (nombre) {
    console.log(`Nombre: ${nombre}`)
})

// Map
console.log("Map: ")
const nombreProductos = carrito.map(producto => producto.nombre);
console.log(nombreProductos);

// Filter
console.log("Filter: ")
const samsungProductos = carrito.filter(producto => producto.nombre.startsWith("Samsung"));
console.log(samsungProductos);
