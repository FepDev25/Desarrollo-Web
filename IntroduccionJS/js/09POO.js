// *********************** Object literal ***********************
const reservacion = {
    nombre : 'Felipe',
    apellido : 'Peralta',
    total : 250,
    pagado : false,
    informacion : function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
    },
    pagar: function() {
        this.pagado = true;
        console.log(`El cliente ${this.nombre} ha pagado.`);
    }
}
reservacion.informacion();
reservacion.pagar();

// *********************** Object constructor ***********************
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
Producto.prototype.formatearProducto = function(){
    return `El producto: ${this.nombre} y su precio: ${this.precio}`;
}

Producto.prototype.aplicarDescuento = function(descuento) {
    this.precio = this.precio - descuento;
}

const producto1 = new Producto('Monitor Curvo 49 pulgadas', 800);
const producto2 = new Producto('Laptop HP', 1200);

producto1.aplicarDescuento(100);
producto2.aplicarDescuento(200);

console.log(producto1.formatearProducto());
console.log(producto2.formatearProducto());

// *********************** Clases <3 ***********************
console.log("Clases: ");

// Definicion de una clase
class Cliente {
    constructor(nombre, apellido, email, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
    }

    formatearCliente(){
        return `El cliente ${this.nombre} ${this.apellido} y su mail: ${this.email}. Edad: ${this.edad}`;
    }

    esMayorDeEdad(){
        return this.edad >= 18;
    }
}

const cliente = new Cliente('Felipe', 'Peralta', 'felipe@gmail.com', 19);
console.log(cliente.formatearCliente());
console.log(`¿Es mayor de edad? ${cliente.esMayorDeEdad() ? 'Sí' : 'No'}`);

// Herencia
class Product {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto \'${this.nombre}\', precio: $${this.precio}.`;
    }
}

class Libro extends Product{
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return super.formatearProducto() + ` Su ISBN es: ${this.isbn}`;
    }

    obtenerIsbn(){
        return `El ISBN del libro es ${this.isbn}`;
    }
}

let l1 = new Libro("Bruno el Gato", 70, '999-9182-9191');
console.log(l1.formatearProducto());
console.log(l1.obtenerIsbn());

// Polimorfismo
class Pelicula extends Product {
    constructor(nombre, precio, duracion) {
        super(nombre, precio);
        this.duracion = duracion;
    }

    formatearProducto() {
        return `La película '${this.nombre}', con una duración de ${this.duracion} minutos, tiene un precio de $${this.precio}.`;
    }
}

let p1 = new Pelicula("El Gran Showman", 150, 120);
console.log(p1.formatearProducto());
