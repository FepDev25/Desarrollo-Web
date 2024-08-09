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

### Herramientas

Iconos:
[Tabler Icons](https://tablericons.com/ )

Fuentes:
[Google Fonts](https://fonts.google.com/)

Normalize: Normalizar, todos los elementos se vean consistentes en todos los navegadores.
[Link](https://necolas.github.io/normalize.css/)

Responsive Design:
[Link](https://responsively.app/)

Box Sizing:
[Link](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)

Herramienta CSS Matic: Ayuda a generar cofigo css.
[Link](https://www.cssmatic.com/)

Can I Use: Ver que codigo css se puede utilizar en navegadores.
[Link](https://caniuse.com/)

Netlify: Publicar proyectos gratis
[Link](https://app.netlify.com/teams/fepdev25/sites)
