-- ##################################################################
-- #                         FORMAS NORMALES                        #
-- ##################################################################

-- Las Formas Normales (FN) son una serie de criterios que se utilizan para 
-- estructurar las bases de datos de manera eficiente, evitando la redundancia 
-- y asegurando la integridad de los datos.

-- 1FN - PRIMERA FORMA NORMAL:
-- --------------------------------
-- En la Primera Forma Normal, los valores en cada columna deben ser atómicos,
-- es decir, indivisibles. Esto significa que no debe haber listas o conjuntos 
-- de valores en una sola columna. También se exige que cada registro en una 
-- tabla sea único.

-- Ejemplo: 
-- Si tienes una tabla de 'Clientes' con una columna 'Teléfonos', no debe 
-- contener múltiples números en una sola celda, sino que cada número de 
-- teléfono debe estar en una fila separada.

-- 2FN - SEGUNDA FORMA NORMAL:
-- --------------------------------
-- Para estar en la Segunda Forma Normal, una tabla debe estar primero en 1FN. 
-- Además, todos los atributos no clave deben depender completamente de la 
-- clave principal. Esto significa que no debe haber dependencia parcial de 
-- la clave.

-- Ejemplo:
-- Si tienes una tabla 'Pedidos' con las columnas 'IDPedido', 'IDCliente', 
-- 'NombreCliente', y 'FechaPedido', 'NombreCliente' depende parcialmente de 
-- 'IDCliente' y no de 'IDPedido'. En 2FN, se debe mover 'NombreCliente' a una 
-- tabla separada relacionada con 'IDCliente'.

-- 3FN - TERCERA FORMA NORMAL:
-- --------------------------------
-- Para cumplir con la Tercera Forma Normal, una tabla debe estar en 2FN. 
-- Además, ningún atributo no clave debe depender de otro atributo no clave. 
-- Es decir, todos los atributos no clave deben depender únicamente de la 
-- clave principal.

-- Ejemplo:
-- Si tienes una tabla 'Empleados' con las columnas 'IDEmpleado', 
-- 'NombreEmpleado', 'Departamento', y 'UbicaciónDepartamento', 
-- 'UbicaciónDepartamento' depende de 'Departamento' en lugar de 
-- 'IDEmpleado'. En 3FN, 'UbicaciónDepartamento' debe ser movido a una tabla 
-- de 'Departamentos' separada.

-- BCNF - FORMA NORMAL DE BOYCE-CODD:
-- --------------------------------
-- Es una versión más estricta de 3FN. En BCNF, cada determinante (un atributo 
-- o conjunto de atributos en el lado izquierdo de una dependencia funcional) 
-- debe ser una clave candidata.

-- Ejemplo:
-- Si una tabla tiene una dependencia funcional donde una columna no clave 
-- determina otra columna no clave, se deben dividir en tablas separadas.

-- 4FN - CUARTA FORMA NORMAL:
-- --------------------------------
-- Para estar en la Cuarta Forma Normal, una tabla debe estar en BCNF. Además, 
-- no debe contener dependencias multivalor. Una dependencia multivalor ocurre 
-- cuando un atributo en una tabla depende de más de un conjunto de atributos 
-- independientemente.

-- Ejemplo:
-- Si tienes una tabla de 'Proyectos' con 'IDProyecto', 'IDEmpleado' y 
-- 'TecnologíaUtilizada', y un empleado puede trabajar en múltiples proyectos 
-- y utilizar varias tecnologías, las combinaciones no deberían repetirse en 
-- la misma tabla.

-- ##################################################################
-- #                       DESNORMALIZACIÓN                         #
-- ##################################################################

-- La desnormalización es el proceso inverso a la normalización. Se utiliza 
-- para mejorar el rendimiento de las consultas en bases de datos, aunque 
-- a costa de introducir cierta redundancia de datos.

-- En lugar de dividir la información en múltiples tablas relacionadas (como 
-- se hace en la normalización), en la desnormalización se combinan algunas 
-- de estas tablas para reducir la necesidad de hacer uniones complejas.

-- Ejemplo:
-- En lugar de tener tablas separadas para 'Clientes' y 'Pedidos', podrías 
-- tener una única tabla que combine la información de ambas para reducir el 
-- tiempo de consulta, aunque esto podría significar que los datos de los 
-- clientes se repitan en varias filas.
