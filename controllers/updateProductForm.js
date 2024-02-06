//IMPORT THE MODEL 
const Products = require('../models/Products')

module.exports = async (req,res) => {
   //console.log(req.params.id)
   const result = await Products.findById(req.params.id)

   //res.redirect('/jewellery')
   console.log(result)
   
   res.render('updateProductForm', { product: result })

}