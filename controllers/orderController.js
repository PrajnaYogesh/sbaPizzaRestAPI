const Order = require('../model/orderSchema')

const createOrder = async(req,res)=>{
    const {orderNumber,customerName,pizza,total,orderTime} = req.body;
    const newPizza = await Order.create({
        orderNumber: orderNumber,
        customerName:customerName,
        pizza: pizza,
        total :total,
        orderTime:orderTime
    
    })
    
    res.json({Pizza:newPizza})
    
}

module.exports = {createOrder};