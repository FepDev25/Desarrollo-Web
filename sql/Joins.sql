/* Joins */

SELECT * FROM appsalon.citas c
INNER JOIN appsalon.clientes cl
ON c.clienteId = cl.id;

SELECT * FROM appsalon.citas c
LEFT JOIN appsalon.clientes cl
ON c.clienteId = cl.id;

SELECT * FROM appsalon.citas c
RIGHT JOIN appsalon.clientes cl
ON c.clienteId = cl.id;

SELECT * FROM appsalon.citsasServicios cs 
LEFT JOIN appsalon.citas c ON c.id  = cs.citaId
LEFT JOIN appsalon.servicios s ON s.id = cs.servicioId;

SELECT * FROM appsalon.citsasServicios cs 
LEFT JOIN appsalon.citas c ON c.id  = cs.citaId
LEFT JOIN appsalon.clientes cli ON cli.id = c.clienteId 
LEFT JOIN appsalon.servicios s ON s.id = cs.servicioId;
