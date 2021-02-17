DROP DATABASE IF EXISTS date_DB;

CREATE DATABASE date_DB;
USE date_DB;

CREATE TABLE `date_DB` (

`id` Int(30) AUTO_INCREMENT NOT NULLL,
`weather` VARCHAR( 255),
`restuarant` VARCHAR( 255),
`food` VARCHAR( 255),
`movie` VARCHAR( 255),
`music` VARCHAR( 255),
`movieTime` VARCHAR( 6),

PRIMARY KEY ( `id` )

);
