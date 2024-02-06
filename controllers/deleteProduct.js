//IMPORT THE MODEL 
const Products = require('../models/Products')

module.exports = async (req,res) => {
   console.log(req.params.id)
   await Products.deleteOne({_id: req.params.id})
   res.redirect('/jewellery')

}