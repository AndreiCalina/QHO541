const Products = require('../models/Products');
const path = require('path');

module.exports = async (req, res) => {
    console.log(req.body);
    console.log(req.files);

    if (req.files && req.files.myfile) {
        // If a file has been uploaded
        const myfile = req.files.myfile;
        const imagePath = '/images/' + myfile.name;

        // Move the uploaded file to the desired directory
        await myfile.mv(path.resolve(__dirname, '../public/images', myfile.name));

        // Update the product with the new image path
        await Products.updateOne({ _id: req.body._id }, {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            path: imagePath
        });
    } else {
        // If no file has been uploaded, update other fields only
        await Products.updateOne({ _id: req.body._id }, {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        });
    }

    res.redirect('jewellery');
};
