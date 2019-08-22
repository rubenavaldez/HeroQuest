create table characters(
id integer(10) auto_increment not null,
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
createdAt timestamp default	current_timestamp not null,
updatedAt timestamp default current_timestamp,
primary key(id)
);

insert into characters(name, image_idle, image_run, image_attack, image_death, health, strength, defense, monster, alive)
values("Barbarian", "https://i.imgur.com/GKO9WhP.gif", "https://i.imgur.com/cS5sqZl.gif", "https://i.imgur.com/keaS3yh.gif", "https://i.imgur.com/o1GZ4lI.gif",500,50,30,0,1),
("Vampire", "https://i.imgur.com/0RmTbiE.gif", "https://i.imgur.com/n1KjQVn.gif", "https://i.imgur.com/tdij01Y.gif", "https://i.imgur.com/I8lwAFx.gif", 300, 60, 25,0,1),
("Knight", "https://i.imgur.com/plFZRpe.gif", "https://i.imgur.com/kQG9tWq.gif", "https://i.imgur.com/LpRS8hh.gif", "https://i.imgur.com/ckS4a2A.gif", 400,50, 70,0,1),
("Apothecary", "https://i.imgur.com/nA4es3s.gif", "https://i.imgur.com/MnKVmSr.gif", "https://i.imgur.com/FOW94G5.gif", "https://i.imgur.com/jXMPS6C.gif", 200, 90, 15,0,1), 
("Necromancer","https://i.imgur.com/o7pW0kT.gif", "https://i.imgur.com/tv0MEWe.gif", "https://i.imgur.com/LOVLIv5.gif","https://i.imgur.com/E7iNOUO.gif", 400, 80, 40,0,1), 
("Sorceress","https://i.imgur.com/DIY3unz.gif","https://i.imgur.com/Q4xywSQ.gif", "https://i.imgur.com/rfzv6c3.gif", "https://i.imgur.com/0J1alLM.gif", 300, 70, 40,0,1);  
 
create table enemies(
id integer(10) auto_increment,
name varchar(30) not null, 
image_idle varchar(50),
image_attack varchar(50),
image_run varchar(50),
image_death varchar(50),
health integer(10),
strength INTEGER(10),
defense INTEGER(10),
monster BOOLEAN,
alive BOOLEAN,
turn BOOLEAN,
createdAt timestamp default	current_timestamp,
updatedAt timestamp default current_timestamp,
primary key(id)
);

insert into enemies(name, image_idle, image_run, image_attack, image_death, health, strength, defense, monster, alive)
values("Skeleton", "https://i.imgur.com/PbrzeT0.gif", "https://i.imgur.com/hIiQ92h.gif", "https://i.imgur.com/x7b9loI.gif", "https://i.imgur.com/Hq5vBUU.gif", 800, 90, 80, 1,1),
("Griffin", "https://i.imgur.com/bRjSdEL.gif", "https://i.imgur.com/d6II22e.gif", "https://i.imgur.com/Cghejej.gif", "https://i.imgur.com/JVBeFyJ.gif", 1000, 60, 5, 1,1),
("Storm_Mage","https://i.imgur.com/wtIbC6h.gif", "https://i.imgur.com/5FlyYPM.gif", "https://i.imgur.com/USLYyPO.gif","https://i.imgur.com/9EyWYyU.gif", 1500, 120, 70, 1,1); 
