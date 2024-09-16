const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
    pizzaName : String,
    category : String,
    ingredients:String,
    price : Number,
    size:String,
    })

    const Pizza = mongoose.model('Pizza',pizzaSchema)
    module.exports = Pizza;