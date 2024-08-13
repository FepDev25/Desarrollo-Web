/****************************** Strings *******************************/

const producto = "Monitor de 20 pulgadas";
const productoEspacios = "                              Celular con espacios                  ";
const producto2 = String("Celular Samsung");
const producto3 = new String("Tablet Samsung");
const producto4 = "Monitor de 40 \"pulgadas\"";

console.log("Producto:", producto);
console.log("Producto2:", producto2);
console.log("Producto3:", producto3);
console.log("Producto4:", producto4);

console.log("Tipo de producto:", typeof producto);
console.log("Tipo de producto2:", typeof producto2);
console.log("Tipo de producto3:", typeof producto3);

console.log("Tamaño de la cadena:", producto.length);
console.log("Índice de 'pulgad':", producto.indexOf("pulgad"));
console.log("Contiene 'pulgad':", producto.includes("pulgad"));
console.log("Contiene 'xoxo':", producto.includes("xoxo"));
console.log("Todo a minúsculas:", producto.toLowerCase());
console.log("Todo a mayúsculas:", producto.toUpperCase());
console.log("Empieza con 'M':", producto.startsWith("M"));
console.log("Termina con 'pulgadas':", producto.endsWith("pulgadas"));
console.log("Porción de la cadena (slice):", producto.slice(0, 7));
console.log("Porción de la cadena (substring):", producto.substring(0, 7));
console.log("Reemplazo '20' con '21':", producto.replace("20", "21"));
console.log("Repetir cadena dos veces:", producto.repeat(2));
console.log("Elimina espacios:", productoEspacios.trim());
console.log("Carácter en índice 0:", producto.charAt(0));
console.log("Dividir en array:", producto.split(" "));

const producto5 = "Monitor de 24 pulgadas";
const precio = "300 USD";
console.log("Concatenación:", producto5.concat(" ", precio, "."));
const descripcion = `${producto5} cuesta ${precio}.`;
console.log("Descripción:", descripcion);

const nombre = "Felipe Peralta";
const email = "felipe@gmail.com";
const concatenado = nombre + " " + email;
console.log(concatenado)

const concatenado2 = `${nombre} ${email}`;
console.log(concatenado2)
// console.clear();

/****************************** Números *******************************/

const num1 = 100;
const num2 = 200;
const num3 = 200.55;

console.log("Número 1:", num1);
console.log("Número 2:", num2);
console.log("Número 3:", num3);

console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("División:", num2 / num1);
console.log("Multiplicación:", num2 * num3);
console.log("Módulo:", num2 % num1);

// Objeto Math
console.log("Objeto Math: ");
const numeroRandom = Math.random();
const numeroPi = Math.PI;
const numeroEuler = Math.E;
const redondeo = Math.round(4.56);
const redondeo2 = Math.ceil(4.01); // Redondear hacia arriba
const redondeo3 = Math.floor(4.01); // Redondear hacia abajo
const raiz = Math.sqrt(144); // Raiz cuadrada
const minimo = Math.min(9,10,10,11,9,1,4,5); // Numero minimo de una lista
const maximo = Math.max(9,10,10,11,9,1,4,5); // Numero maximo de una lista
const numeroRandom2 = Math.floor(Math.random() * 10);
const potencia = Math.pow(2, 3); // Eleva 2 a la potencia 3 (2^3 = 8)
const absoluto = Math.abs(-5.76); // Valor absoluto, convierte negativo a positivo
const logaritmo = Math.log(10); // Logaritmo natural de 10
const logaritmoBase10 = Math.log10(100); // Logaritmo base 10 de 100
const seno = Math.sin(Math.PI / 2); // Seno de PI/2 (1)
const coseno = Math.cos(0); // Coseno de 0 (1)
const tangente = Math.tan(Math.PI / 4); // Tangente de PI/4 (1)
const truncado = Math.trunc(4.9); // Trunca el número, eliminando decimales
const signo = Math.sign(-10); // Devuelve -1 si el número es negativo, 1 si es positivo, y 0 si es 0
const raizCubica = Math.cbrt(27); // Raíz cúbica de 27 (3)

console.log("Número aleatorio:", numeroRandom);
console.log("Valor de PI:", numeroPi);
console.log("Constante de Euler:", numeroEuler);
console.log("Redondeo (round):", redondeo);
console.log("Redondeo hacia arriba (ceil):", redondeo2);
console.log("Redondeo hacia abajo (floor):", redondeo3);
console.log("Raíz cuadrada:", raiz);
console.log("Número mínimo:", minimo);
console.log("Número máximo:", maximo);
console.log("Número aleatorio (0-9):", numeroRandom2);
console.log("Potencia (2^3):", potencia);
console.log("Valor absoluto:", absoluto);
console.log("Logaritmo natural de 10:", logaritmo);
console.log("Logaritmo base 10 de 100:", logaritmoBase10);
console.log("Seno de PI/2:", seno);
console.log("Coseno de 0:", coseno);
console.log("Tangente de PI/4:", tangente);
console.log("Número truncado:", truncado);
console.log("Signo de -10:", signo);
console.log("Raíz cúbica de 27:", raizCubica);

// Orden de las operaciones
let resultado;
resultado = 20 + 30 * 2; // Primero la multiplicacion
console.log("20 + 30 * 2 = ", resultado)

const impuesto = 0.15;
let total = 100+200+3*90;
total = total + (total * impuesto);
console.log("(100+200+3*90) * 1.15 = ", total)

// Incrementos

let puntaje = 10;
console.log(puntaje);
puntaje++;
console.log(puntaje);
++puntaje;
console.log(puntaje);
puntaje --;
console.log(puntaje);
puntaje += 78;
console.log(puntaje);

/****************************** Booleans *******************************/

const bool1 = true;
const bool2 = false;
const bool3 = new Boolean(true)

console.log("Booleanos: ");
console.log(bool1);
console.log(bool2);
console.log(bool3);
