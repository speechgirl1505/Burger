DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    item_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR (100) NOT NULL,
    devoured BOOLEAN DEFAULT false,,
	PRIMARY KEY (item_id)
);


