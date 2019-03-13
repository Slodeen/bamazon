DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;


USE bamazon_db;


CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100),
    price DECIMAL(10, 2),
    stock_quantity INT(200),
    PRIMARY KEY(id)
);



INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES  ("Dell Computer", "electronics", 1000.00, 7),  
        ("Iphonex", "electronics", 750.00, 5),
        ("Shoes", "men", 25.00, 98),
        ("Make up",	"women", 60.00,	30),
        ("Perfume",	"women", 100.00, 30),
        ("Fridge",	"appliances",	2000.00, 5),
        ("microwave", "appliances",	80.00,	15),
        ("The Library Book", "books",	35.00,	17),
        ("The Pioneers",	"books",	12.00,	19),
        ("From the Ground Up",	"books",	20.00,	25),
        ("A Star is Born",	"movies",	10.00,	50),
        ("Aquaman",	"movies",	8.00,	30),
        ("Green Book",	"movies",	15.00,	30);
