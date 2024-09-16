const mongoose = require('mongoose')

const custSchema = new mongoose.Schema({
    custName : {type:String, require:true},
    custEmail:{type:String, require:true},
    custPhone:{type:Number, require:true}
})

const Customer = mongoose.model('Customer',custSchema);
module.exports = Customer;