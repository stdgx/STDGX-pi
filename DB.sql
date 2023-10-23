CREATE DATABASE stdgx;

use stdgx;

CREATE TABLE product (
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    PRIMARY KEY(id),
    UNIQUE (id)
);

CREATE TABLE users (
    id int NOT NULL,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (login)
);