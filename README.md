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
- Etiquetas a utilizar: header(cabeza de pagina), footer(pie de pagina), nav(navegacion), main(elementos principales), section(secciones), article, aside, div.

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

Selector de elemento: Directamente el elemento, selecciona todos esos elementos del html
Selector de clase: .class Es reutilizable
Selector por ID: #id Dar un id unico por pagina
Selector de atributo: [src="logo.jpg"]
Combinacion de descendentes: .cliente .nombre
Todos los hijos .cliente > p

### Especificidad

Mientras mas especifico sea un sselector, mas probable es qeu este se aplique.
El navegador toma en cuenta el selector mas especifico

### Colores

Por nombre
Hexadecimal
rgb()
hsl()
rgba()

### Extras

Iconos:
[Tabler Icons](https://tablericons.com/ )

Fuentes:
[Google Fonts](https://fonts.google.com/)
