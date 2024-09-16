const express = require('express');
const app = express();
require('dotenv').config();
const PORT=process.env.PORT;
const connectToDB= require('./config/connectToDB')
connectToDB();
app.use(express.json());
const custRoute = require('./routes/custRoute')
const pizzaRoute = require('./routes/pizzaRoute')
const orderRoute = require('./routes/orderRoute')





app.use('/api',custRoute);
app.use('/api/pizza',pizzaRoute)
app.use('/api/order',orderRoute)

app.listen(PORT,()=>{
    console.log("Listening to port");
   
})
