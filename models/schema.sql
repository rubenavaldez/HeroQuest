DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

drop database if exists heroquest;
create database heroquest;
use heroquest;

create table characters(
id integer(10) primary key auto_increment,
name varchar(30) not null, 
bio varchar(500),
image_idle varchar(50),
image_run varchar(50),
image_attack varchar(50),
image_death varchar(50),
health integer(10),
strength INTEGER(10),
defense INTEGER(10),
monster BOOLEAN,
alive BOOLEAN,
turn BOOLEAN,
createdAt timestamp default	current_timestamp,
updatedAt timestamp default current_timestamp
);

insert into characters(name, image_idle, image_run, image_attack, image_death, health, strength, defense)
values("Barbarian Women", "https://i.imgur.com/GKO9WhP.gif", "https://i.imgur.com/cS5sqZl.gif", "https://i.imgur.com/keaS3yh.gif", "https://i.imgur.com/o1GZ4lI.gif",500,50,30),
("Vampire", "https://i.imgur.com/0RmTbiE.gif", "https://i.imgur.com/n1KjQVn.gif", "https://i.imgur.com/tdij01Y.gif", "https://i.imgur.com/I8lwAFx.gif", 300, 60, 25),
("Knight", "https://i.imgur.com/plFZRpe.gif", "https://i.imgur.com/kQG9tWq.gif", "https://i.imgur.com/LpRS8hh.gif", "https://i.imgur.com/ckS4a2A.gif", 400,50, 70),
("Apothecary", "https://i.imgur.com/nA4es3s.gif", "https://i.imgur.com/MnKVmSr.gif", "https://i.imgur.com/FOW94G5.gif", "https://i.imgur.com/jXMPS6C.gif", 200, 90, 15); 
 
