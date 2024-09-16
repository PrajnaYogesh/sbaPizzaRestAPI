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

const getAllOrder = async(req,res)=>{
    const allOrder = await Order.find();
    res.json({Orders: allOrder});
}

const getAOrder = async(req,res)=>{
    const orderID= req.params.id;
    const order = await Order.findById(orderID);
    if(!order){
res.send({message : "No order Placed"})
    }
    res.json({Order: order});
}



const editOrder = async(req,res)=>{
    const orderID= req.params.id;
    const {orderNumber,
    customerName,
    pizza, 
    total ,
    orderTime} = req.body;

await Order.findByIdAndUpdate(orderID,{
    orderNumber:orderNumber,
    customerName:customerName,
    pizza:pizza, 
    total:total ,
    orderTime:orderTime
})

const updatedOrder = await Order.findById(orderID)
res.json({Order : updatedOrder})


}


const deleteOrder= async(req,res) =>{
    const orderID = req.params.id
    await Order.findByIdAndDelete(orderID)
    const order = await Order.find();
    res.json({Order:order})
    }
    

module.exports = {createOrder,getAllOrder,getAOrder,editOrder,deleteOrder};