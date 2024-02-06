const mongoose = require('mongoose')


const Schema = mongoose.Schema;
//MODEL
const inventorySchema = new Schema({
    "item": String,
    "qty": Number,
    "size": {
        "h": Number,
        "w": Number,
        "uom": String
    },
    "status": String

});
//ASK mongodb to create a model
//NAME so it doesn't take the plural of Inventory
const Inventory = mongoose.model('Inventory', inventorySchema, 'inventory');
//Export if someone needs to access it
module.exports = Inventory;