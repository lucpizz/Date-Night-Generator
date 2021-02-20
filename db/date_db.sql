DROP DATABASE IF EXISTS date_db;

CREATE DATABASE date_db;
USE date_db;

CREATE TABLE `Dates` (

`id` Int(30) AUTO_INCREMENT NOT NULL,
`name` VARCHAR( 255),
`rating` Int( 5 ),

PRIMARY KEY ( `id` )

);
