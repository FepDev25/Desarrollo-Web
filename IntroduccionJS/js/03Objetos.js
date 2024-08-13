// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
};

console.log(producto);
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);
// Otra manera
console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
console.log(producto);

// Eliminar propiedades
delete producto.disponible;
console.log(producto);

// Acceder a valores del objeto
const producto2 = {
    nombreProducto : "Samsung Galaxy S24",
    precio : 5000,
    disponible : false
};
const nombreDelProducto = producto2.nombreProducto; // Forma antigua
console.log(nombreDelProducto);

const {precio} = producto2; // Destructuring de objetos
console.log(precio);

const {nombreProducto, disponible} = producto2;
console.log(nombreProducto);
console.log(disponible);

// Object methods

const producto3 = {
    nombreProducto: "Samsung Galaxy S24",
    precio: 5000,
    disponible: false
};

Object.freeze(producto3); // No permite agregar, modificar ni eliminar propiedades del objeto
producto3.imagen = 'imagen.jpg'; // No se puede realizar, la propiedad no se añadirá
console.log("Producto 3 después de freeze:", producto3);

const congelado = Object.isFrozen(producto3); // Verifica si el objeto está congelado
console.log("¿Producto 3 está congelado?:", congelado);

const producto4 = {
    nombreProducto: "Samsung Galaxy S24",
    precio: 5000,
    disponible: false
};

Object.seal(producto4); // No permite agregar ni eliminar propiedades, pero permite modificar las existentes
producto4.disponible = true; // Se puede modificar una propiedad existente
console.log("Producto 4 después de seal y modificación:", producto4);

const sellado = Object.isSealed(producto4); // Verifica si el objeto está sellado
console.log("¿Producto 4 está sellado?:", sellado);

const keys = Object.keys(producto4); // Devuelve un array con los nombres de las propiedades
console.log("Propiedades de producto 4:", keys);

const values = Object.values(producto4); // Devuelve un array con los valores de las propiedades
console.log("Valores de producto 4:", values);

const entries = Object.entries(producto4); // Devuelve un array de arrays, cada uno con [clave, valor]
console.log("Entradas (clave, valor) de producto 4:", entries);

// Unir dos objetos

const producto5 = {
    nombreProducto: "Samsung Galaxy S24",
    precio: 5000,
    disponible: false
};

const medida = {
    peso : '1kg',
    medida : '1m'
};

const nuevoProducto = { ...producto5, ...medida}

console.log("Producto:", producto5);
console.log("Medida:", medida);
console.log("Nuevo producto:", nuevoProducto);
