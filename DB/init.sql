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
    Username VARCHAR(50) PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Password_user VARCHAR(255) NOT NULL
);

-- TABLA DETALLES (key inc, id int -linkeado a peliculas, username - linkeado a usuarios)
CREATE TABLE Detalle_Pelicula (
    ID SERIAL PRIMARY KEY,
    ID_Pelicula INT,
    Username VARCHAR(50),
    CONSTRAINT fk_pelicula
      FOREIGN KEY(ID_Pelicula) 
      REFERENCES Pelicula(ID),
    CONSTRAINT fk_usuario
      FOREIGN KEY(Username) 
      REFERENCES Usuario(Username)
);

-- ver la referenciacion!!

-- Insert  Genero 
INSERT INTO Genero (Nombre) VALUES
('Action'),
('Comedy'),
('Fantasy');

-- Insert Pelicula 
INSERT INTO Pelicula (Nombre, Descripcion, ID_Genero, Foto) VALUES
('Star Wars', 'Pelicula que ocurre en una galaxia muy muy lejana', 1, 'link starwars'),
('Ratatouille', 'Una rata ayuda a un humano a cocinar.', 2, 'link Ratatouille'),
('Harry Potter', 'Saga en la que se juega Quidditch y se derrota a quien no debe ser nombrado', 3, 'LInk harrt potter');

-- Insert  Usuario 
INSERT INTO Usuario (Username, Nombre, Password_user) VALUES
('user1', 'User 1', 'password1'),
('user2', 'User 2', 'password2'),
('user3', 'User 3', 'password3');

-- Insert Detalle_Pelicula 
INSERT INTO Detalle_Pelicula (ID_Pelicula, Username) VALUES
(1, 'user1'),
(2, 'user2'),
(3, 'user3');

