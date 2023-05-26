CREATE DATABASE n2;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS usuarios (
  id INT PRIMARY KEY NOT NULL,
  usuario VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id INT PRIMARY KEY NOT NULL,
  conteudo VARCHAR(255) NOT NULL,
  user_id INT,
  FOREIGN KEY(user_id) REFERENCES usuarios(id)
);

INSERT INTO usuarios(id, usuario) VALUES (1, 'Steam Brasil');

INSERT INTO posts(id, conteudo, user_id) VALUES (1, 'Olha o jogo free rapeize!', 1);

INSERT INTO posts(id, conteudo, user_id) VALUES (2, 'Preparem seus bolsos!', 1);