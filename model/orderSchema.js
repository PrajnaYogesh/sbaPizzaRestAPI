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

// 66e7aac18306478d8db21675
// 66e7ab278306478d8db21679
// 66e7ab4d8306478d8db2167d
// 66e7b0e8bc1f2e8ace225c7f
// 66e7ab4d8306478d8db2167d