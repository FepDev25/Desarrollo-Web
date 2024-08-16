# Desarrollo Web

## HTML

- Sin html no hay pagina web.
- Es un lenguaje, pero no de programacion.
- Lenguaje para la estructura de los sitios web.
- Lenguaje de marcado de hipertexto.
- Sintaxis facil y clara.
- Utiliza etiquetas como:

<!DOCTYPE html>
    <html>
        <head> <!-- Etiqueta cabeza: Informacion del sitio. -->
            <title>Mi primera página</title>
        </head>
        <body> <!-- Etiqueta cuerpo: Contenido que ve el usuario. -->
            <p>Este es un párrafo en HTML.</p> <!-- Parrafos -->
        </body>
    </html>

### Estructurar el contenido HTML

- Separar las diferentes secciones de una pagina web.
- "Agrupar"
- Etiquetas a utilizar: header(cabeza de pagina), footer(pie de pagina), nav(navegacion), main(elementos principales), section(secciones), article, aside, div, etc.

## CSS

### Hojas de estilo en cascada

El rol de CSS: Colores, tamanios, animaciones, espacios, margenes. adaptar a dispositivos ect
Ojas de estilo en cascada que permiten darle un disenio unico al codigo html.

### Anatomia

Selector {
    codigo css
    llave : valor
    propiedad : valor;
}

### Selectores

- Selector de elemento: Directamente el elemento, selecciona todos esos elementos del html
- Selector de clase: .class Es reutilizable
- Selector por ID: #id Dar un id unico por pagina
- Selector de atributo: [src="logo.jpg"]
- Combinacion de descendentes: .cliente .nombre
- Todos los hijos .cliente > p

### Especificidad

Mientras mas especifico sea un selector, mas probable es que este se aplique.
El navegador toma en cuenta el selector mas especifico. Se puede pasar por encima a todos con: !important (no recomendado).

### Colores

- Por nombre
- Hexadecimal
- rgb()
- hsl()
- rgba()

### Displays

- Display block: El elemento se va a colocar uno debajo del otro sin importar su contenido.
- Display inline: El elemento se va a colocar a la derecha del otro, solo ocupa el espacio de su tamanio.

### Flexbox

- Modelo unidimensional para crear disenios.
- Se puede colocar y distribuir los elementos en una direccion, fila (row) o columna (column). Row es el default. Tambien existe row-reverse y column-reverse.
- Rox o row-reverse: Los elementos se colocan de izquierda a derecha.
- Column o column-reverse: Los elementos se colocan de arriba a abajo.
- Utilizada para alinear elementos en los disenios.

### BEM

- Bloques, elementos, modificadores.
- Se tiene un bloque principal y partiendo de ese se describen los demas elementos.
- .card{}
- .card__titulo{}
- .card__imagen{}
- .card__boton{}
- .card__boton--activo{}
- Bloque: Contenedores, es una seccion por si sola y no requiere de otras secciones para su apariencia. Ej: "class: cliente"
- Elemento: Son parte de un bloque, dependen del bloque y no son por si solos significativos. Ej: "class: cliente__nombre"
- Modificador: Es una bandera que avisa que un elemento como un bloque o elemento tendra un disenio diferente. Ej: "class: cliente__nombre--ceo"

### Utility first

- Crear una clase con una propiedad que describe que es loque haria.
- .text_center{}
- .color-red-100{}
- .color-red-75{}
- .margin-2{}

### Modulos

- Se define lo que es el contenido principal y luego se selecciona los elementos html
- .card {}
- .card h1 {}
- .card img {}
- .card a {}

### Responsive Web Design

- Hacer el sitio web adaptable a diferentes dispositivos.
- El disenio debera adaptarse a la resolucion que utilice el usuario.
- Media Queris: @media(min-width){}
- 480: Telefonos
- 768: Tablet
- 1140: Laptop o PC
- 1440: Convencion

### CSS Box Model

- El tamanio de lo que se muestra en la pantalla depende de: Contenido, relleno (padding), borde y el margen.

### Margin

- Separacion de los elementos con respecto a otros, hacia afuera.

### Padding

- El espacio del elemento, hacia adentro.

### CSS Grid

- Permite definir la ubicacion y el tamanio de loe elementos del sistio web. El contenido se agrupa dentro de una area definida, como una tabla.

### Cuando elegir Grid y Flexbox

- Utilizar flexbox para la alineacion o distribucion de los elementos que estaran dentro de contenedores. Ej: Navegacion.
- Utilizar grid para el layout dell sitio web, como pueden ser las columnas o contenedores de elementos.

### Patrones de diseño para RWD

- 2 Columnas Iguales
Un diseño simple en el que la pantalla se divide en dos columnas de igual ancho. Es ideal para mostrar contenido que debe ser visto en paralelo, como texto e imágenes o dos listas de datos.

- 3 Columnas Iguales
Este patrón organiza el contenido en tres columnas de igual ancho. Se utiliza para mostrar información en bloques separados pero relacionados, siendo útil en sitios con múltiples secciones de contenido.

- Column Drop
Un diseño en el que las columnas se apilan verticalmente a medida que el ancho de la pantalla disminuye. Es común en sitios que necesitan ser fácilmente legibles en dispositivos móviles, donde el contenido se reorganiza para adaptarse a pantallas más pequeñas.

- Con Sidebar
Un diseño donde el contenido principal ocupa la mayor parte de la pantalla, mientras que una barra lateral (sidebar) se utiliza para mostrar contenido secundario o navegación. En pantallas más pequeñas, la barra lateral suele desplazarse debajo del contenido principal.

- Layout Shifter
Un patrón flexible que cambia la disposición del contenido en función del ancho de la pantalla. A medida que la pantalla se hace más pequeña, los elementos se reorganizan y cambian de tamaño para mantener una apariencia y funcionalidad óptimas en cualquier dispositivo.

- Tiny Tweaks
Pequeños ajustes según la resolución.

- Mostly Fluid
Un diseño mayormente fluido en el que las columnas se ajustan proporcionalmente al ancho de la pantalla, pero con algunos elementos fijos para mantener la estructura y la legibilidad. Es ideal para diseños que necesitan adaptarse a una variedad de dispositivos sin perder consistencia.

### Mejorar performance

#### Lazy loading

- Cargar un elemento cuando se llegue a el.
- Descargar imagenes segun se va requiriendo.

<!DOCTYPE html>
    <html>
        <head>
            <title>Mi primera página</title>
        </head>
        <body>
            <img loading="lazy" src="" alt="Imagen blog">
        </body>
</html>

#### Preload

- Cargar elementos los cuales se considera necesrio que se carguen lo mas rapido posible.

<!DOCTYPE html>
    <html>
        <head> 
            <!-- Ojas de estilo -->
            <link rel="preload" href="" as="style">
            <link rel="stylesheet" href="">
            <!-- Fuentes -->
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" crossorigin="crossorigin" as="font">
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
            <title>Mi primera página</title>
        </head>
        <body>
        </body>
    </html>

#### Prefecth

- Cargar la siguiente pagina que el usuario se crea que va a visitar.

<!DOCTYPE html>
    <html>
        <head>
            <link rel="prefetch" href="" as="document">
            <title>Mi primera página</title>
        </head>
        <body>
        </body>
</html>

#### Formatos exclusivos de imagenes oara web: Webp

- Imagen con la misma calidad pero optimizadas para web.
- Ideal pero aveces no tiene soporte.
- Se debe especificar tambien una imagen con un formato que sea soportado por todos los navegadores en caso de estar en un navegador que no soporte webp.

<!DOCTYPE html>
    <html>
        <head>
        </head>
        <body>
            <picture>
                <source srcset="./img/blog1.webp" type="image/webp">
                <img loading="lazy" src="./img/blog1.jpg" alt="Imagen blog">
            </picture>
        </body>
</html>

#### Etiquetas Meta

<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"> <!-- Sirve para aceptar caracteres especiales -->
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Se encarga de mostrar el contenido proporcional-->
            <meta name="description" content="Pagina web de blog de cafe"> <!-- Descripcion de lo que trata el sitio web-->
        </head>
        <body>
        </body>
</html>

## SASS

- CSS con superpoderes.
- Syntatically Awesome StyleSheet.
- Se le considera un estandar de la industria, compatible con muchos frameworks de css.
- Mejor orden y estructura, separando en diferentes archivos el codigo.
- Caracteristicas que no existen en CSS o con mejor soporte.
- No es nativo en el navegador, se debe compilar con alguna herramienta.
- La anidacion puede causar problemas.
- Utiliza variables:
    $color: #e1e1e1;
    $separacion: 5rem;
- Anidacion en SASS
    1. .saas: Usa identacion.
    1. .scss: Sintaxis mas parecida a css.

- SASS se debe compilar en un archivo css.

### Misins en SASS

- Permiten escribir codigo que puede ser re-utilizado en las hojas de estilos.
- La cantidad de clase y codigo repetido puede ser menor.
- El HTML sera semanticamente mejor.
- Sintaxis: @mixin nombre {}
- Se utilizan con: @inclue nombre

## Gulp.js

- Automatizar tareas repetitivas en Desarrollo web como: Compilar SAAS y JS, crear imagenes ligeras o minificar codigo para produccion.
- Para utilizar gulp.js se necesita Node.js y NPM.
- Gulp utiliza Js.

## Node.js

- Entorno que permite ejecutar JS en el servidor.

## NPM

- Node Package Manager. Es un sistema de gestion de paquetes para el lenguaje JS. Es el administrador de paquetes por defecto para el entorno de ejecucion Node.js

## Archivo package.json

- Es un archivo se utiliza para almacenar metadotos relevantes sobre el proyecto.
- Se encuentra en la raíz del proyecto y cumple varias funciones importantes:

    1. Gestión de dependencias: El archivo package.json es crucial para la gestión de las dependencias del proyecto. Las dependencias son paquetes o módulos de código que el proyecto necesita para funcionar correctamente. Estas dependencias se pueden dividir en varios tipos:
        1. Dependencias de proyecto (dependencies): Son los paquetes necesarios para que la aplicación funcione en producción. Estos paquetes son necesarios durante la ejecución de la aplicación, y sin ellos, la aplicación podría fallar.
        1. Dependencias de desarrollo (devDependencies): Son los paquetes que solo se necesitan durante el desarrollo del proyecto, como herramientas de prueba, linters, o compiladores. No son necesarias para la ejecución del proyecto en producción.
        1. Dependencias de dependencias: Estas son las dependencias que son requeridas por otros paquetes (las dependencias principales del proyecto). Cuando instalas una dependencia, también se instalan automáticamente sus propias dependencias para asegurar que funcione correctamente.
    1. Permite definir scripts personalizados: Los scripts personalizados son comandos que se pueden ejecutar con npm run <nombre_del_script>, permitiendo automatizar tareas comunes en el desarrollo, como iniciar un servidor local, ejecutar pruebas, o construir la aplicación para producción.

## JavaScript

- Es el lenguaje de la web.
- Agrega interactividad a los sistios web.
- Desarrollo FrontEnd y BackEnd
- Desarrollo de aplicaciones de escritorio y moviles.
- Reaccionar a eventos del usuario a la pagina web.
- Validar fomularios.
- Procesar informacion.
- JS corre sobre el DOM: Document object model, o como estan conectados los elementos en el sitio web.
- Herramientas de Js para distintos usos:
    1. Para el frontend: React Js, Vue Js, Angular
    1. Para el servidor: Node Js, Express, Deno
    1. Para automatizacion: Gulp Js, Webpack, ESLint
    1. Para dependencias: NPM
    1. Para apps moviles o escritorio: React Native, Electron

### Use strict

- Se lo coloca al inicio del script, hace que el codigo de js se ejecute de forma estricta, mostrando cada mensaje de error.

### Diferencias entre funciones

#### Declaracion de la funcion

- Se utiliza generalmente cuando necesitas definir una función global o que estará disponible en todo el bloque de código.
- Hoisting: Las declaraciones de funciones son "elevadas" al principio de su contexto (función o script) durante la fase de compilación. Esto significa que puedes llamar a la función antes de su declaración en el código, y funcionará sin problemas.

#### Expresion de la funcion

- Se utiliza cuando necesitas una función local o anónima, o cuando deseas definir una función de manera condicional o dinámica.
- No hay Hoisting Completo: A diferencia de las declaraciones de funciones, las expresiones de funciones no son elevadas de la misma manera. Solo la variable que contiene la función es elevada, pero su asignación (la función) no lo es. Por lo tanto, si intentas llamar a la función antes de su definición, obtendrás un error de referencia.

### Promesas

- Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.
- Estados de una Promesa:

    1. Pendiente (Pending): Estado inicial, la operación no ha terminado.
    1. Cumplida (Fulfilled): La operación se completó con éxito.
    1. Rechazada (Rejected): La operación falló.

- Manejo de Promesas:

    1. then: Se ejecuta cuando la promesa se cumple.
    1. catch: Se ejecuta cuando la promesa es rechazada.
    1. finally: Se ejecuta siempre, independientemente del resultado.

### Async/Await

- async/await es una sintaxis que simplifica el trabajo con promesas y permite escribir código asíncrono de manera más legible y estructurada.
- async: Se coloca antes de una función para que siempre retorne una promesa.
- await: Se utiliza dentro de funciones async para esperar la resolución de una promesa. La ejecución de la función se pausa hasta que la promesa se resuelve.

### Fetch Api

- Permite enviar u obtener informacion de un servidor.
- Se puede actualizar la app sin teer que recargar la pagina, actualizar en tiempo real.
- Se puede obtener un archivo local o una respuesta de servidor (texto o .json).
- Utiliza promesas y async /await.

#### Json

- Significa JavaScript object notation.
- Lenguaje de trasnporte de datos.
- Puede ser creado en cualquier lenguaje y se puede consumir en JavaScript por medio de Fetch Api para mostrarlo en el sitio web.

### DOM Scripting

- Seleccionar crear y modificar elementos del HTML.
- Agregar eventos.

### Herramientas

Iconos:
[Tabler Icons](https://tablericons.com/ )

Fuentes:
[Google Fonts](https://fonts.google.com/)

Normalize: Normalizar, todos los elementos se vean consistentes en todos los navegadores.
[Normalize](https://necolas.github.io/normalize.css/)

Responsive Design:
[Responsive Design](https://responsively.app/)

Box Sizing:
[Box Sizing](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)

Herramienta CSS Matic: Ayuda a generar cofigo css.
[CSS Matic](https://www.cssmatic.com/)

Can I Use: Ver que codigo css se puede utilizar en navegadores.
[Can I Use](https://caniuse.com/)

Netlify: Publicar proyectos gratis.
[Netlify](https://app.netlify.com/teams/fepdev25/sites)

Modernizr: Libreria de javascript para detectar las caracteristicas de una navegador. Si las soporta se ejcuta un codigo y si no la soporta ejecuta otro.
[Modernizr](https://modernizr.com/)

Lighthouse: Extesnion de google para indicar si la pagina web sigue buenas practicas.
[Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es)

NPM: Administrador de paquetes.
[NPM](https://www.npmjs.com/)
