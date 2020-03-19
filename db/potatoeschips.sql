-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema potatoeschipsr
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `potatoeschipsr` ;

-- -----------------------------------------------------
-- Schema potatoeschipsr
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `potatoeschipsr` DEFAULT CHARACTER SET utf8 ;
USE `potatoeschipsr` ;

-- -----------------------------------------------------
-- Table `potatoeschipsr`.`Tipo_suscripciones`
-- -----------------------------------------------------

CREATE TABLE `potatoeschipsr`.`Tipo_suscripciones` (
  `id_suscripcion` INT PRIMARY KEY AUTO_INCREMENT,
  `nombre` VARCHAR(45),
  `tarifa` FLOAT
  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `potatoeschipsr`.`Usuarios_suscripcion`
-- -----------------------------------------------------

CREATE TABLE `potatoeschipsr`.`Usuarios_suscripcion` (
  `id_usuario` INT PRIMARY KEY AUTO_INCREMENT,
  `nombre` VARCHAR(45),
  `apellidos` VARCHAR(45),
  `email` VARCHAR(45),
  `telefono` INT,
  `dni` VARCHAR(15),
  `ano_nacimiento` DATE,
  `provincia` VARCHAR(45),
  `mensaje` VARCHAR(900),
  `activo` BOOLEAN,
  `newsletter` BOOLEAN,
  `fecha_alta` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `fecha_baja` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `id_usuarios_suscripcion` INT,


  CONSTRAINT `FK1 Usuarios_suscr`
    FOREIGN KEY (`id_usuarios_suscripcion`)
    REFERENCES `potatoeschipsr`.`Tipo_suscripciones` (`id_suscripcion`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `potatoeschipsr`.`Registros`
-- -----------------------------------------------------

CREATE TABLE `potatoeschipsr`.`Registros` (
  `idRegistros` INT PRIMARY KEY AUTO_INCREMENT,
  `fecha_alta` DATETIME  DEFAULT CURRENT_TIMESTAMP,
  `fecha_baja` DATETIME  DEFAULT CURRENT_TIMESTAMP,
  `codigo_reg` VARCHAR(45)
  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `potatoeschipsr`.`Usuarios_log/reg`
-- -----------------------------------------------------

CREATE TABLE `potatoeschipsr`.`Usuarios_log/reg` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `email` VARCHAR(45),
  `pass` VARCHAR(45),
  `pass2` VARCHAR(45),
  `Usuarios_log/reg_id` INT,


  CONSTRAINT `FK2 Usuarios_log/reg_id`
    FOREIGN KEY (`Usuarios_log/reg_id`)
    REFERENCES `potatoeschipsr`.`Registros` (`idRegistros`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



-- INSERTS _____________________________________________________________________________________________


-- -----------------------------------------------------
-- Data for table `potatoeschipsr`.`Tipo_suscripciones`
-- -----------------------------------------------------
START TRANSACTION;

USE `potatoeschipsr`;

INSERT INTO `potatoeschipsr`.`Tipo_suscripciones` (`id_suscripcion`, `nombre`, `tarifa`) VALUES (NULL, 'Suscripcion1', 0);
INSERT INTO `potatoeschipsr`.`Tipo_suscripciones` (`id_suscripcion`, `nombre`, `tarifa`) VALUES (NULL, 'Suscripcion2', 2.55);
INSERT INTO `potatoeschipsr`.`Tipo_suscripciones` (`id_suscripcion`, `nombre`, `tarifa`) VALUES (NULL, 'Suscripcion3', 5.10);

COMMIT;


-- -----------------------------------------------------
-- Data for table `potatoeschipsr`.`Usuarios_suscripcion`
-- -----------------------------------------------------
START TRANSACTION;
USE `potatoeschipsr`;
INSERT INTO `potatoeschipsr`.`Usuarios_suscripcion` (`id_usuario`, `nombre`, `apellidos`, `email`, `telefono`, `dni`, `ano_nacimiento`, `provincia`, `mensaje`, `activo`, `newsletter`, `fecha_alta`, `fecha_baja`, `id_usuarios_suscripcion`) VALUES (NULL, 'Ruben', 'Fernandez', 'rubenferndez@hotmail.com', 934567532, 'md5(34532345S)', '1989-02-20', 'Barcelona', NULL, true, true, '2020-01-01', NULL, NULL);
INSERT INTO `potatoeschipsr`.`Usuarios_suscripcion` (`id_usuario`, `nombre`, `apellidos`, `email`, `telefono`, `dni`, `ano_nacimiento`, `provincia`, `mensaje`, `activo`, `newsletter`, `fecha_alta`, `fecha_baja`, `id_usuarios_suscripcion`) VALUES (NULL, 'Juan ', 'Palomo', 'juanpalomo@hotmail.com', 923456789, 'md5(45372861B)', '1991-01-01', 'Tarragona', NULL, false, false, '2019-07-10', NULL, NULL);
INSERT INTO `potatoeschipsr`.`Usuarios_suscripcion` (`id_usuario`, `nombre`, `apellidos`, `email`, `telefono`, `dni`, `ano_nacimiento`, `provincia`, `mensaje`, `activo`, `newsletter`, `fecha_alta`, `fecha_baja`, `id_usuarios_suscripcion`) VALUES (NULL, 'Jorge', 'Valdano', 'jorgevaldano@hotmail.com', 923458789, 'md5(36273645A)', '1983-01-01', 'Lleida', NULL, true, true, '2018-02-23', '2020-01-01', NULL);
INSERT INTO `potatoeschipsr`.`Usuarios_suscripcion` (`id_usuario`, `nombre`, `apellidos`, `email`, `telefono`, `dni`, `ano_nacimiento`, `provincia`, `mensaje`, `activo`, `newsletter`, `fecha_alta`, `fecha_baja`, `id_usuarios_suscripcion`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `potatoeschipsr`.`Usuarios_suscripcion` (`id_usuario`, `nombre`, `apellidos`, `email`, `telefono`, `dni`, `ano_nacimiento`, `provincia`, `mensaje`, `activo`, `newsletter`, `fecha_alta`, `fecha_baja`, `id_usuarios_suscripcion`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `potatoeschipsr`.`Usuarios_suscripcion` (`id_usuario`, `nombre`, `apellidos`, `email`, `telefono`, `dni`, `ano_nacimiento`, `provincia`, `mensaje`, `activo`, `newsletter`, `fecha_alta`, `fecha_baja`, `id_usuarios_suscripcion`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `potatoeschipsr`.`Usuarios_suscripcion` (`id_usuario`, `nombre`, `apellidos`, `email`, `telefono`, `dni`, `ano_nacimiento`, `provincia`, `mensaje`, `activo`, `newsletter`, `fecha_alta`, `fecha_baja`, `id_usuarios_suscripcion`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `potatoeschipsr`.`Usuarios_suscripcion` (`id_usuario`, `nombre`, `apellidos`, `email`, `telefono`, `dni`, `ano_nacimiento`, `provincia`, `mensaje`, `activo`, `newsletter`, `fecha_alta`, `fecha_baja`, `id_usuarios_suscripcion`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `potatoeschipsr`.`Registros`
-- -----------------------------------------------------
START TRANSACTION;
USE `potatoeschipsr`;
INSERT INTO `potatoeschipsr`.`Registros` (`idRegistros`, `fecha_alta`, `fecha_baja`, `codigo_reg`) VALUES (NULL, '2020-01-01', NULL, '19283746CFG');
INSERT INTO `potatoeschipsr`.`Registros` (`idRegistros`, `fecha_alta`, `fecha_baja`, `codigo_reg`) VALUES (NULL, '2020-02-20', NULL, '12738493DHY');
INSERT INTO `potatoeschipsr`.`Registros` (`idRegistros`, `fecha_alta`, `fecha_baja`, `codigo_reg`) VALUES (NULL, '2019-07-30', '2020-02-01', '23467885RTH');

COMMIT;


-- -----------------------------------------------------
-- Data for table `potatoeschipsr`.`Usuarios_log/reg`
-- -----------------------------------------------------
START TRANSACTION;
USE `potatoeschipsr`;
INSERT INTO `potatoeschipsr`.`Usuarios_log/reg` (`id`, `email`, `pass`, `pass2`, `Usuarios_log/reg_id`) VALUES (NULL, 'joseluis@hotmail.com', 'md5(elcolormasbello)', 'md5(elcolormasbello)', NULL);
INSERT INTO `potatoeschipsr`.`Usuarios_log/reg` (`id`, `email`, `pass`, `pass2`, `Usuarios_log/reg_id`) VALUES (NULL, 'oscarestevez@hotmail.com', 'md5(lomasfacil)', 'md5(lomasfacil)', NULL);
INSERT INTO `potatoeschipsr`.`Usuarios_log/reg` (`id`, `email`, `pass`, `pass2`, `Usuarios_log/reg_id`) VALUES (NULL, 'danielguijarro@hotmail.com', 'md5(elmejor)', 'md5(elmejor)', NULL);

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




-- FINAL DE LOS INSERTS________________________________________________________________________________________________
