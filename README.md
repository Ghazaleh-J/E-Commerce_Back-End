# E-Commerce_Back-End_ORM-13

## Description
Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.
In this application, I build a back end for an e-commerce site by modifying starter code (a working Express.js API) to use Sequelize to interact with a MySQL database.

## Criteria
* By adding the database name, MySQL username, and MySQL password to an environment variable file, you're able to connect to a database using Sequelize
* By entering schema and seed commands, a development database is created and is seeded with test data
* By entering the command to invoke the application, the server is started and the Sequelize models are synced to the MySQL database
* By opening API GET routes in Insomnia for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON
* By testing API POST, PUT, and DELETE routes in Insomnia, you're able to successfully create, update, and delete data in the database

## Installation
* Copy the repository to your system
* Create .env file
* SET DB_NAME to 'ecommerce_db'
* SET DB_USER to 'YOUR-MYSQL-USERNAME'
* SET DB_PASSWORD to 'YOUR-MYSQL-PASSWORD'
* npm install
* Load schema.sql via MySQL command line:
    - source db/schema.sql
* npm run seed
* node server.js

## Technologies
* Sequelize
* MySQL
* dotenv

## Usage
* Back End application using CRUD API routes with a MySQL database

## Link
[Video Demo](https://drive.google.com/file/d/1qwQMUzNpGh715QLcwjWgc8gqOlAmMWoP/view)