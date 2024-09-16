const Customer= require('../model/customerSchema')

const createCustomer = async(req,res)=>{
const {custName,custEmail,custPhone} = req.body;
const newCust = await Customer.create({
    custName : custName,custEmail:custEmail,custPhone:custPhone
})

res.json({Customer:newCust})

    }


    const getAllCustomers = async(req,res)=>{
        const allCust = await Customer.find();
        res.json({Customers: allCust});
    }

    const getCustomer = async(req,res)=>{
        const custID= req.params.id;
        const customer = await Customer.findById(custID);
        if(!customer){
res.send({message : "Customer record not present"})
        }
        res.json({Customers: customer});
    }


    const editCustomer = async(req,res)=>{
        const custID= req.params.id;
    const {custName ,custEmail, custPhone} = req.body;

  await Customer.findByIdAndUpdate(custID,{
        custName : custName,custEmail:custEmail, custPhone:custPhone
    })

    const updatedCust = await Customer.findById(custID)
    res.json({Customer : updatedCust})


}


const deleteCustomer = async(req,res) =>{
const custId = req.params.id
await Customer.findByIdAndDelete(custId)
const cust = await Customer.find();
res.json({customer:cust})
}

module.exports = {createCustomer,getAllCustomers,getCustomer,editCustomer,deleteCustomer};