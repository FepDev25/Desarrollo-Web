USE appsalon;


CREATE TABLE clientes (
	id INT(11) AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
	apellido VARCHAR(60) NOT NULL,
	telefono VARCHAR(10) NOT NULL,
	email VARCHAR(30) NOT NULL UNIQUE,
	PRIMARY KEY (id)
);
INSERT INTO appsalon.clientes (nombre, apellido, telefono, email) VALUES ("Felipe", "Peralta", "0939019136", "felipe@gmail.com");
INSERT INTO appsalon.clientes (nombre, apellido, telefono, email) VALUES ("Diego", "Peralta", "093789018", "diego@gmail.com");
INSERT INTO appsalon.clientes (nombre, apellido, telefono, email) VALUES ("Karen", "Peralta", "0938901281", "kren@gmail.com");


CREATE TABLE citas (
	id INT(11) NOT NULL AUTO_INCREMENT,
	fecha DATE NOT NULL,
	hora TIME NOT NULL,
	clienteId INT (11) NOT NULL,
	PRIMARY KEY (id),
	KEY clienteId (clienteId),
	CONSTRAINT cliente_FK FOREIGN KEY (clienteId) REFERENCES appsalon.clientes(id)
);
INSERT INTO appsalon.citas (fecha, hora, clienteId) VALUES ('2024-08-28', '10:30:00', 1);
INSERT INTO appsalon.citas (fecha, hora, clienteId) VALUES ('2024-08-29', '10:00:00', 1);
INSERT INTO appsalon.citas (fecha, hora, clienteId) VALUES ('2024-08-30', '12:30:00', 1);


CREATE TABLE citsasServicios (
	id INT(11) NOT NULL AUTO_INCREMENT,
	citaId INT(11) NOT NULL,
	servicioId INT(11) NOT NULL,
	PRIMARY KEY (id),
	KEY citaId (citaId),
	CONSTRAINT citas_FK FOREIGN KEY (citaId) REFERENCES appsalon.citas(id),
	KEY servicioId (servicioId),
	CONSTRAINT servicios_FK FOREIGN KEY (servicioId) REFERENCES appsalon.servicios(id)
);
INSERT INTO appsalon.citsasServicios (citaId, servicioId) VALUES(1, 3);
INSERT INTO appsalon.citsasServicios (citaId, servicioId) VALUES(1, 3);
INSERT INTO appsalon.citsasServicios (citaId, servicioId) VALUES(2, 8);
INSERT INTO appsalon.citsasServicios (citaId, servicioId) VALUES(2, 7);
INSERT INTO appsalon.citsasServicios (citaId, servicioId) VALUES(3, 9);
INSERT INTO appsalon.citsasServicios (citaId, servicioId) VALUES(3, 4);

SHOW TABLES;
DESCRIBE clientes;
DESCRIBE citas;
SELECT * FROM appsalon.clientes;
SELECT * FROM appsalon.servicios;
SELECT * FROM appsalon.citas;
SELECT * FROM appsalon.citsasServicios;