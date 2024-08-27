use appsalon;

show tables;

/* Crear tabas */
CREATE TABLE servicios (
	id INT(11) AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
	precio DECIMAL(6,2) NOT NULL,
	PRIMARY KEY (id)
);

DESCRIBE servicios;

/* CRUD: Create, Red, Update, Delete*/

/* Create */
INSERT INTO appsalon.servicios (nombre, precio) VALUES ('Corte de cabello de adulto', 80);
INSERT INTO appsalon.servicios (nombre, precio) VALUES ('Corte de cabello de anciano', 40);
INSERT INTO appsalon.servicios (nombre, precio) VALUES ('Tinte Rubio Mujer', 120);
INSERT INTO appsalon.servicios (nombre, precio) VALUES 
	('Corte de cabello Niño', 60),
	('Peinado Mujer', 80),
	('Peinado Hombre', 60);

/* Read */

SELECT * FROM appsalon.servicios;

SELECT nombre FROM appsalon.servicios;

SELECT id, nombre, precio 
FROM appsalon.servicios
ORDER BY precio;

SELECT id, nombre, precio 
FROM appsalon.servicios
ORDER BY nombre DESC;

SELECT id, nombre, precio
FROM appsalon.servicios
ORDER BY precio DESC
LIMIT 2;

SELECT * FROM appsalon.servicios WHERE id=2;

SELECT * FROM appsalon.servicios WHERE precio > 75;


/* Update */

UPDATE appsalon.servicios SET precio=45 WHERE id=5;
UPDATE appsalon.servicios SET nombre='Corte de cabello de niño', precio = 65 WHERE id=2;

/* Delete */
DELETE FROM appsalon.servicios WHERE id  = 6;

/* Modificar la base de datos */
ALTER TABLE appsalon.servicios ADD descripcion VARCHAR(100) NOT NULL;

ALTER TABLE appsalon.servicios CHANGE descripcion descripcion VARCHAR(150) NOT NULL;
INSERT INTO appsalon.servicios (nombre, precio, descripcion) VALUES ('Corte de las puntas Mujer', 40, 'Corte simple de puntas para mujeres.');

ALTER TABLE appsalon.servicios  DROP COLUMN descripcion;

/* Eliminar tablas */
DROP TABLE appsalon.servicios;


/**/
CREATE TABLE servicios (
	id INT(11) AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
	precio DECIMAL(6,2) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE reservaciones (
	id INT (11) NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
	apellido VARCHAR(60) NOT NULL,
	hora TIME DEFAULT NULL,
	fecha DATE DEFAULT NULL,
	servicios VARCHAR (255) NOT NULL,
	PRIMARY KEY (id)
);

/* Selecciones especificas */
SELECT * FROM appsalon.servicios WHERE precio > 90;
SELECT * FROM appsalon.servicios WHERE precio < 90;
SELECT * FROM appsalon.servicios WHERE precio >= 80;
SELECT * FROM appsalon.servicios WHERE precio BETWEEN 100 AND 200;

/* Funciones agregadoras */
SELECT COUNT(id), fecha
FROM appsalon.reservaciones
GROUP BY fecha
ORDER BY COUNT(id) DESC;

SELECT SUM(precio) AS totalServicios
FROM appsalon.servicios;

SELECT MIN(precio) AS precioMenor 
FROM appsalon.servicios;

SELECT MAX(precio) AS precioMayor
FROM appsalon.servicios;

/* Buscar en sql */
SELECT * FROM appsalon.servicios
WHERE nombre LIKE 'Corte%';

SELECT * FROM appsalon.servicios
WHERE nombre LIKE '%Cabello';

SELECT * FROM appsalon.servicios
WHERE nombre LIKE '%Cabello%';

/* Concatenar en SQL */
SELECT CONCAT(nombre, ' ' ,apellido) AS nombreCompleto
FROM appsalon.reservaciones;

SELECT * FROM appsalon.reservaciones
WHERE CONCAT(nombre, " ", apellido) LIKE '%Maria Diaz%'; 

SELECT hora, fecha, CONCAT(nombre, ' ' ,apellido) AS 'Nombre Completo' 
FROM appsalon.reservaciones
WHERE CONCAT(nombre, " ", apellido) LIKE '%Maria Diaz%'; 

/* Operadores */
SELECT * FROM appsalon.reservaciones 
WHERE id IN (1,3);

SELECT * FROM appsalon.reservaciones 
WHERE fecha = '2021-06-28'
AND id = 1;

SELECT * FROM appsalon.reservaciones 
WHERE fecha = '2021-06-28'
OR id = 3;
