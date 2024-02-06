const Inventory = require('../models/Inventory')
const Products = require('../models/Products')

module.exports = async (req,res) => {
    const inventoryItems = await Inventory.find();

    console.log(inventoryItems)

    res.send(inventoryItems)
}