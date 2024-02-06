const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:  String,  
    price: Number,
    path:  String, 
    description: String
      

});

const Products = mongoose.model('Products', productSchema,'products');

module.exports = Products;
//export default Products;
