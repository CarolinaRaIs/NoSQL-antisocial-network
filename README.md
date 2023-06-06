# NoSQL-antisocial-network
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

# shop-here-orm-e-commerce-backend
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)


## [Description:](#description)

        This project is an API for a social network web application using Express.js and MongoDB with Mongoose ODM. Mongoose ODM (Object Data Modeling) provides a higher-level abstraction over MongoDB, and allows developers to define schemas for their data, perform validations, create models, and interact with the MongoDB database using a more structured and convenient approach. The API is designed to handle large amounts of unstructured data, making MongoDB an ideal choice for its speed and flexibility. By leveraging these technologies, it was possible to create a robust backend that allows users to share thoughts, react to friends' thoughts, and manage their friend list. 

        To meet the acceptance criteria, the application starts the server and syncs Mongoose models to the MongoDB database. It provides formatted JSON responses for GET routes to retrieve user and thought data. It also allows successful creation, updating, and deletion of users, thoughts, reactions, and friend relationships through API POST, PUT, and DELETE routes.

        The project's file structure follows best practices, with separate folders for configurations, controllers, models, and routes. The config folder handles the MongoDB connection, while the controllers folder contains the logic for handling request controllers. The models folder defines the Mongoose models for User and Thought, with the required schema settings. The routes folder defines the API routes for accessing and manipulating user and thought data.

        This project satisfies the technical acceptance criteria by using the Mongoose package to connect to MongoDB, implementing the User and Thought models with the specified schema settings, and including the Reaction subdocument schema in the Thought model. It also properly formats timestamps in the queried data.

        In summary, this NoSQL: Antisocial Network API project combines Express.js, MongoDB, and Mongoose to build a powerful API for a social network web application, providing essential features like thought sharing, reactions, and friend management.

## [Table of Contents:](#table-of-contents:)
   
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
   
## [Installation:](#installation:)

    Prior to using the application:

    * clone the repository and install the required dependencies with npm install or npm i

    These are the dependencies you should:
     * Node.js:
        A JavaScript runtime environment that executes JavaScript code outside of a web browser.

     * MYSQL2:
        A MySQL database driver for Node.js that enables interaction with MySQL databases

    * Sequelize: 
        An Object Relational Mapping (ORM) library that provides an easier way to interact with databases by representing database tables as JavaScript objects.

     * Express.js:
        A web framework that allows for easy creation of RESTful APIs.

    * dotenv:
        A zero-dependency module that loads environment variables from a .env file into process.env. This makes it easy to keep sensitive information like API keys and database passwords out of code and safely stored in an environment file.
 
## [Usage:](#usage:)

    To use this e-commerce back-end application, you'll need to make sure you first cloned the repository to your local machine and installed the required dependencies by running npm install or npm i, then follow the steps below:

    * create a new .env file at the root of the project and add your MYSQL credentials (DB_NAME, DB_USR, and DB_PW).

    * Connect to MySQL database With your own database credentials; $ mysql -u root -p
    
    * Create the database schema mysql> source db/schema.sql;
    
    * Exit the database mysql> exit
    
    * Populate the database $ npm run seed
    
    * Start the server $ npm start

    * Use an application like Insomnia or Postman to test the API routes, which include:

        * GET routes for all categories, products and tags
        * GET routes for a single category, product, or tag by ID.
        * POST, PUT, and DELETE routes for categories, products, and tags.
    
    * When done testing you can stop the application by pressing CTRL + C in your terminal.

Example of testing a route in Insomnia:
![plot](./insomnia-test-example.png)

[Video Walk-through: Testing Routes In Insomnia](https://drive.google.com/file/d/1jrcaVYFqHufM4ovCH7TUHCeH83FJPhkV/view?usp=share_link)

    To access the Github Repository visit:
       https://github.com/CarolinaRaIs/shop-here-orm-e-commerce-backend

    To access the deployed site visit:
        https://carolinarais.github.io/shop-here-orm-e-commerce-backend/ 

## [License:](#license:)

       This project is licensed under the ISC license.
   
## [Contributing:](#contributing:)

       Contributions are welcome and encouraged for this project. If you find any issues or have any suggestions for new features, please open an issue or submit a pull request. Before submitting a pull request, please ensure that your code adheres to the project's coding guidelines and has appropriate test coverage. Thank you for your interest in contributing to this project!  
   
## [Tests:](#tests:)

       I encourage contributors to thoroughly explore the code and test it to ensure its functionality. Any feedback or suggestions regarding the testing process are welcomed and appreciated.
   
## [Questions:](#questions:)

       If you have any questions about the repo you can open an issue.

**If more questions arise you can also contact CarolinaRaIs at determination28@gmail.com**
   

       
------------------------------------------------------------------------------------------------
   
This README was generated by [CarolinaRaIs](https://github.com/CarolinaRaIs)