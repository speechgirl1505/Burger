DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    item_id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (100) NOT NULL,
    devoured TINYINT (1) NOT NULL,
	PRIMARY KEY (item_id)
);


