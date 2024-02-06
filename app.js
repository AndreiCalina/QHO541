const express = require('express')
const path = require("path")

const app = express()
const ejs = require('ejs')
app.set('view engine', 'ejs')

app.use(express.static("public"))

// EXPRESS SESSION Middleware
const session = require('express-session')
app.use(session({
   secret: 'Keyboard Cat',
   resave: false,
   saveUninitialized: true
}))

// File Upload middleware
const fileUpload = require('express-fileupload')
app.use(fileUpload())

//Install the body parser using npm install body-parser 
//to check for body requests
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//MONGOOSE
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/eflyer').then(()=>{
   console.log('Connection successful')
 });

 
   //Importing the Models
   const Inventory = require('./models/Inventory')
   const Products = require('./models/Products')
   

// THIS IS A GLOBAL VARIABLE AND ANY GLOBAL VARIABLE IS ACCESSIBLE FROM ANYWHERE EVEN IN EJS
global.loggedIn = null;

app.use("",(req,res,next) =>{
   //console.log('My session middleware')
   loggedIn = req.session.userId;
   console.log(loggedIn)
   next()
});



// FOR PRODUCT VALIDATION
const productValidationMiddleware = (req, res, next) => {
   const { name, price, description } = req.body;
   const { myfile } = req.files;

   if (!name || !price || !description || !myfile) {
       const missingFields = [];
       if (!name) missingFields.push('Name');
       if (!price) missingFields.push('Price');
       if (!description) missingFields.push('Description');
       if (!myfile) missingFields.push('Image');

       const errorMessage = `The following fields are mandatory: ${missingFields.join(', ')}`;
       
       // Sending an error response with status code 400 (Bad Request)
       return res.status(400).send(errorMessage);
   }

   next();
};

app.use("/addNewProduct", productValidationMiddleware);


// CONTROLLERS BELOW

//Inventory Controller      
const inventoryController = require('./controllers/inventory')
app.get('/inventory', inventoryController)

//Add Products Controller
const addProductsController = require('./controllers/addProducts')
app.get('/addProducts', addProductsController)

//Get Products Controller
const getProductsController = require('./controllers/getProducts')
app.get('/getProducts', getProductsController)

//Contact Page Controller
const contactController = require('./controllers/contact')
app.get('/contact', contactController)

//Add new product FORM Controller
const newProductController = require('./controllers/newProductForm')
app.get('/newProductForm', newProductController)

//Add new product Controller
const addNewProductController = require('./controllers/addNewProduct')
app.post('/addNewProduct', addNewProductController)

//Delete product Controller
const deleteProductController = require('./controllers/deleteProduct')
app.get('/deleteProduct/:id', deleteProductController)

//Update product FORM Controller
const updateProductFormController = require('./controllers/updateProductForm')
app.get('/updateProductForm/:id', updateProductFormController)

//Update product Controller
const updateProductController = require('./controllers/updateProduct')
app.post('/updateProduct', updateProductController)

//LOGIN CONTROLLER
const loginUserController = require('./controllers/loginUser')
app.post('/loginUser', loginUserController)

//LOGOUT USER
const logoutController = require('./controllers/logout')
app.get('/logout', logoutController)

//LOGIN FORM
const loginFormController = require('./controllers/loginForm')
app.get('/loginForm', loginFormController)

//REGISTRATION FORM CONTROLLER
const userRegistrationFormController = require('./controllers/userRegistrationForm')
app.get('/userRegistrationForm', userRegistrationFormController)

//REGISTER USER CONTROLLER
const registerUserController = require('./controllers/registerUser')
app.post('/registerUser', registerUserController)




   //|HOME CONTROLLER
const homeController = require('./controllers/home')
app.get('/', homeController)

   
   //ELECTRONIC CONTROLLER
const electronicController = require('./controllers/electronic')
app.get('/electronic', electronicController)

   
   //FASHION CONTROLLER
const fashionController = require('./controllers/fashion')
app.get('/fashion', fashionController)

   
   //JEWELLERY CONTROLLER
const jewelleryController = require('./controllers/jewellery')
app.get('/jewellery', jewelleryController)

//Port number and hostname !! COMMENTED IN CASE THERE ARE ANY ISSUES
   const port = 3040;
// const hostname = '127.0.0.1';

// Telling server to listen on given port/hostname variables
app.listen(port, () => {
    console.log(`Server ${hostname} is running on port number ${port}`);
    console.log(`Server Url = https://${hostname}:${port}`);
 });

