## Advanced Databases QHO 541 ##
  ## Andrei Calina 10297201 ##
   ## Eflyer E-Shop ##

## Cyclic:  - Deployed successfully but says Error application cannot start
QHO541
https://good-erin-betta-shoe.cyclic.app/   
## GitHub:
https://github.com/AndreiCalina/QHO541.git



# Introduction

The idea for this project came from seeing the rising trend of online shopping and realizing the need for businesses to have a strong online presence. 
As a result, I started working on this project to build an e-commerce website using Node.js, Express.js, MongoDB, and other tools. My goal was to create a platform that makes online shopping easier for customers and helps businesses expand their reach by selling their products online.

# P1: Setup
After installing NodeJS, which can be done by downloading the installer from the official NodeJS website and following the installation prompts, I initialized a NodeJS project using the npm init command. This command creates a package.json file, which serves as a manifest for my NodeJS project, containing metadata such as project name, version, dependencies, etc. Additionally, installing nodemon via npm install -g nodemon globally allowed me to automatically restart my NodeJS server whenever I made changes to my code. This is incredibly helpful during development as it saved me from manually stopping and starting the server every time I made changes.

# P2: Template & EJS
 The Eflyer template, for instance, caught my attention due to its sleek design and mobile-friendly layout. After acquiring the template, I converted its HTML pages to EJS (Embedded JavaScript) format to take advantage of EJS's dynamic templating capabilities in Express applications. This conversion process involved renaming the HTML files to .ejs extension and integrating them into my Express project's views directory. By doing so, I could leverage EJS's features such as template inheritance, partials, and dynamic data rendering.

# P3: DB
Mongoose serves as an excellent ORM (Object-Relational Mapping) tool for MongoDB, providing a straightforward way to model my data and interact with MongoDB databases. After installing Mongoose via npm install mongoose --save, I established a connection to my MongoDB database in my Express application. This connection string typically includes the MongoDB server's URL and any authentication credentials if required. With Mongoose, I defined schemas for my data models, specifying the structure, types, and constraints of my MongoDB collections. For instance, my Products schema includes fields like name, price,path and description, while my Users schema includes fields like name, username, and password.

# P4: Middleware
Middleware plays a crucial role in Express applications, enabling me to extend the functionality of my routes with additional processing logic. For example, I incorporated middleware for file upload using packages like multer, which simplifies the handling of multipart/form-data. This middleware intercepts incoming requests containing file uploads, parses the form data, and stores the files in the designated destination directory. Similarly, I implemented middleware for data validation to ensure that incoming request data meets certain criteria before proceeding with further processing. This validation middleware, perhaps using a library like express-validator, checks request parameters, body, query strings, etc., against predefined validation rules, returning errors if validation fails. Finally, I utilized middleware for session management, allowing me to maintain user sessions across multiple HTTP requests. With packages like express-session, I can securely store session data on the server-side and associate sessions with specific users, enabling features like user authentication and authorization.

# P5: CRUD Controllers
Below are some of the controllers that collectively manage the CRUD operations.
// Add Product Controller:

This controller is responsible for handling the addition of a new product to the inventory.
It receives product data via a form submission (req.body) and an optional file upload (req.files).
It saves the uploaded file to the server's file system and then creates a new document in the Products collection with the product details, including the file path.

// Add Products Controller (multiple):

This controller demonstrates adding multiple products to the database at once.
It defines an array of product items and inserts them into the Products collection using the insertMany() method.

// Delete Product Controller:

This controller handles the deletion of a product from the inventory.
It receives the ID of the product to be deleted as a URL parameter (req.params.id) and then deletes the corresponding document from the Products collection.

// Get Products Controller:

This controller retrieves all products from the database.
It queries the Products collection to retrieve all documents and sends them as a response to the client.

// Update Product Controller:

This controller handles updating product information.
It receives updated product data from a form (req.body) and updates the corresponding document in the Products collection, including handling file uploads if necessary.

# P6.  LOGIN/REGISTER/LOGOUT Controllers
// Login User Controller:

This controller handles user login functionality.
It receives the username and password from a login form (req.body) and validates them against user records in the database. If the credentials are valid, it creates a session for the user.

// Logout Controller:

This controller handles user logout functionality.
It destroys the user session, effectively logging the user out.

// Register User Controller:

This controller handles user registration functionality.
It receives user registration data (name, username, password) from a registration form (req.body) and saves it to the Users collection in the database.