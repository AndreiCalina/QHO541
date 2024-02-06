const Products = require('../models/Products');
const path = require('path');

module.exports = async (req, res) => {
    if (!req.files || !req.files.myfile) {
        console.log("File not uploaded");
        // Handle the case where no file was uploaded
        // For example, you could redirect the user to a page displaying an error message
        return res.redirect("/newProductForm");
    }

    let myfile = req.files.myfile;
    myfile.mv(path.resolve(__dirname, '../public/images', myfile.name));

    try {
        await Products.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            path:'/images/'+myfile.name
        });
        res.redirect('jewellery');
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send("Internal Server Error");
    }
};
