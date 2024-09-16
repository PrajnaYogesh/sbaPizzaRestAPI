const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderNumber: {type : Number, require: true},
    customerName: {  type: String,  required: true},
    pizza: { type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' ,required :true} , // Reference to Pizza model,
    total :{type : Number, require: true},
    orderTime:{type : Date, default: Date.now},
})

const Order = mongoose.model('Order',orderSchema)

module.exports = Order;

