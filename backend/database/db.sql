-- creacion de la base de datos --
CREATE DATABASE victorfisiofit;

-- usando la base de datos --
USE victorfisiofit;

-- creacion de tabla --
CREATE TABLE compradores (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(11)
);

-- mostrar todas las tablas --
SHOW TABLES;

-- mostrar descripcion de tabla --
DESCRIBE clientesprueba;