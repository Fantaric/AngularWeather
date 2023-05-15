DROP DATABASE IF EXISTS Cache_Weather;
CREATE DATABASE Cache_Weather;

USE Cache_Weather;


CREATE TABLE cities(

id int primary key auto_increment,
name varchar(255),
longitude varchar(255),
latitude varchar(255)
);
