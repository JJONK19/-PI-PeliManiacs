-- TABLA GENERO (key que se incrementa y nombre)
CREATE TABLE Genero (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL
);

-- TABLA PELICULA (key inc, nombre, desc, genero y foto LINK! String)
CREATE TABLE Pelicula (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Descripcion TEXT,
    ID_Genero INT,
    Foto VARCHAR(255),
    CONSTRAINT fk_genero
      FOREIGN KEY(ID_Genero) 
      REFERENCES Genero(ID)
);

-- TABLA USUARIOS (nombre, username y password)
CREATE TABLE Usuario (
    ID SERIAL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Nombre VARCHAR(255) NOT NULL,
    Password_user VARCHAR(255) NOT NULL
);

-- TABLA DETALLES (key inc, id int -linkeado a peliculas, username - linkeado a usuarios)
CREATE TABLE Detalle_Pelicula (
    ID SERIAL PRIMARY KEY,
    ID_Pelicula INT,
    ID_Usuario INT,
    CONSTRAINT fk_pelicula
      FOREIGN KEY(ID_Pelicula) 
      REFERENCES Pelicula(ID),
    CONSTRAINT fk_usuario
      FOREIGN KEY(ID_Usuario) 
      REFERENCES Usuario(ID)
);

-- ver la referenciacion!!

-- Insert  Genero 
INSERT INTO Genero (Nombre) VALUES
('Ciencia ficción'),
('Acción'),
('Suspenso'),
('Crimen'),
('Drama'),
('Fantasía'),
('Animación'),
('Comedia');

-- Insert Pelicula 
INSERT INTO Pelicula (Nombre, Descripcion, ID_Genero, Foto) VALUES
('Origen', 'Un ladrón que roba secretos corporativos utilizando tecnología de compartir sueños recibe la tarea inversa de plantar una idea en la mente de un C.E.O.', 1, 'https://image.tmdb.org/t/p/w185/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg'),
('El Caballero Oscuro', 'Cuando el villano conocido como el Joker emerge de su misterioso pasado, siembra el caos y el desorden entre la gente de Gotham.', 2, 'https://image.tmdb.org/t/p/w185/1PEFfYM4PV80dDqqO7jkCBdjbZa.jpg'),
('Interestelar', 'Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.', 1, 'https://image.tmdb.org/t/p/w185/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'),
('Parásitos', 'La codicia y la discriminación de clases amenazan la recién formada relación simbiótica entre la adinerada familia Park y el clan Kim, que está en la miseria.', 3, 'https://image.tmdb.org/t/p/w185/4N55tgxDW0RRATyrZHbx0q9HUKv.jpg'),
('Vengadores: Endgame', 'Después de los devastadores eventos de Avengers: Infinity War, el universo está en ruinas. Los Vengadores se reúnen una vez más para deshacer las acciones de Thanos y restaurar el orden.', 2, 'https://image.tmdb.org/t/p/w185/br6krBFpaYmCSglLBWRuhui7tPc.jpg'),
('El Padrino', 'El envejecido patriarca de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su hijo reacio.', 4, 'https://image.tmdb.org/t/p/w185/wLXd1Cd0XW7DhXayfC0Ok5ago9r.jpg'),
('Pulp Fiction', 'Las vidas de dos matones, un boxeador, un gánster y su esposa, y una pareja de bandidos de restaurante se entrelazan en cuatro relatos de violencia y redención.', 4, 'https://image.tmdb.org/t/p/w185/hNcQAuquJxTxl2fJFs1R42DrWcf.jpg'),
('Sueño de Fuga', 'Dos hombres encarcelados se vinculan durante varios años, encontrando consuelo y eventual redención a través de actos de decencia común.', 5, 'https://image.tmdb.org/t/p/w185/dc1fX265fZIIY5Hab8I7CdETyJy.jpg'),
('Matrix', 'Un hacker informático aprende de misteriosos rebeldes sobre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.', 1, 'https://image.tmdb.org/t/p/w185/qK76PKQLd6zlMn0u83Ej9YQOqPL.jpg'),
('Forrest Gump', 'Las presidencias de Kennedy y Johnson, los eventos de Vietnam, Watergate y otros eventos históricos se desarrollan a través de la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75.', 5, 'https://image.tmdb.org/t/p/w185/saHP97rTPS5eLmrLQEcANmKrsFl.jpg'),
('El Club de la Pelea', 'Un oficinista insomne y un fabricante de jabón despreocupado forman un club de lucha clandestino que evoluciona en mucho más.', 5, 'https://image.tmdb.org/t/p/w185/bI0BhpswEApC0B17RhLZtRVPZiQ.jpg'),
('El Señor de los Anillos: La Comunidad del Anillo', 'Un humilde Hobbit de la Comarca y ocho compañeros se embarcan en un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.', 6, 'https://image.tmdb.org/t/p/w185/9xtH1RmAzQ0rrMBNUMXstb2s3er.jpg'),
('Star Wars: Episodio IV - Una Nueva Esperanza', 'Luke Skywalker se une a un Caballero Jedi, un piloto presumido, un Wookiee y dos droides para salvar la galaxia de la estación de batalla destructora de planetas del Imperio.', 1, 'https://image.tmdb.org/t/p/w185/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg'),
('El Rey León', 'El príncipe león Simba y su padre son blanco de su amargado tío, que quiere ascender al trono.', 7, 'https://image.tmdb.org/t/p/w185/vEuDJgzrnkhmyBdtlO7hYCZ5Z9P.jpg'),
('Gladiador', 'Un exgeneral romano busca vengarse del emperador corrupto que asesinó a su familia y lo envió a la esclavitud.', 2, 'https://image.tmdb.org/t/p/w185/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg');

-- Insert  Usuario 
INSERT INTO Usuario (Username, Nombre, Password_user) VALUES
('user1', 'User 1', 'password1'),
('user2', 'User 2', 'password2'),
('user3', 'User 3', 'password3');

-- Insert Detalle_Pelicula 
INSERT INTO Detalle_Pelicula (ID_Pelicula, Username) VALUES
(1, 'user1'),
(2, 'user2'),
(3, 'user3'),
(4, 'user1'),
(5, 'user2'),
(6, 'user3')
(7, 'user1'),
(8, 'user2'),
(9, 'user3'),
(10, 'user1'),
(11, 'user2'),
(12, 'user3'),
(13, 'user1'),
(14, 'user2'),
(15, 'user3');

