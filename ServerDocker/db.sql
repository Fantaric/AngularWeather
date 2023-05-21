DROP DATABASE IF EXISTS Cache_Weather;
CREATE DATABASE Cache_Weather;

USE Cache_Weather;


CREATE TABLE weather(
id int primary key auto_increment,
city varchar(255),
date date,
apiResponse json
);