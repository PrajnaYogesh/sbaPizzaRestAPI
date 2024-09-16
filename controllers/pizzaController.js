const Pizza = require('../model/pizzaSchema')


const createPizza = async(req,res)=>{
    const {pizzaName,category,ingredients,price,size} = req.body;
    const newPizza = await Pizza.create({
        pizzaName:pizzaName,
        category:category,
        ingredients:ingredients,
        price:price,
        size:size
    })
    
    res.json({Pizza:newPizza})
    
}


const getAllPizza = async(req,res)=>{
    const allPizza = await Pizza.find();
    res.json({Pizzas: allPizza});
}

const getAPizza = async(req,res)=>{
    const pizzaID= req.params.id;
    const pizza = await Pizza.findById(pizzaID);
    if(!pizza){
res.send({message : "Pizza not available"})
    }
    res.json({Pizza: pizza});
}


module.exports = {createPizza,getAllPizza,getAPizza}