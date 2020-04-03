drop schema if exists mvc_database;
create schema mvc_database;
use mvc_database;

-- USUARIOS DE LOGIN Y REGISTRO
create table users(
    id int primary key auto_increment,
    email varchar(45),
    pass varchar(45),
    -- IsEmailConfirmed = Cuando se registre el usuario estará a '0' y cuando clique al link se pondrá en '1'
    IsEmailConfirmed int not null default(0),
    -- emailToken = El TOKEN, lo usaremos como una especie de 'llave' para comparar entre base de datos y email de comprobacion(si coincide en ambos sitios, es correcto)
    emailToken varchar(20) not null
);


-- USUARIOS DE SUSCRIPCION
create table users_suscripcion(
	 id int primary key auto_increment,
     nombre varchar(45),
     apellidos varchar(45),
     email varchar(45),
     telefono int,
     dni varchar(45),
     ano_nac int,
     provincias varchar(45),
     mensaje varchar(200)
);
-- SET SQL_SAFE_UPDATES = 0;

-- select * from users;

-- update users set IsEmailConfirmed = 1 where email = 'ruben@ruben.com';
