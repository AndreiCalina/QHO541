//IMPORT THE MODEL 
const Products = require('../models/Products')

module.exports = async (req,res) => {
    const productItems = [
        {name: 'Watch', price: 50, path: ''},
        {name: 'Ring', price: 60, path: ''},
        {name: 'Bracelet', price: 90, path: ''},
        {name: 'Earrings', price: 30, path: ''}
       ]
          // CODE BELOW IS FOR SINGLE PRODUCT ADD and ABOVE is for ARRAY
           // const productItems = {name: 'Watch', price: 50, path: ''}
     
           // const newProducts = new Products(productItems)
           // await newProducts.save();
   await Products.insertMany(productItems) // NEED TO PUT ASYNC in front of (req,res) if using 'await'
   res.send('Successfully added')
}