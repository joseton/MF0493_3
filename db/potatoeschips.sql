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
