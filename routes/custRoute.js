const express= require('express');
const router = express.Router();
const customer = require('../controllers/custController')


router.post('/cust/add',customer.createCustomer);
router.get('/cust',customer.getAllCustomers)
router.get('/cust/:id',customer.getCustomer)
router.put('/cust/:id',customer.editCustomer)
router.delete('/cust/:id',customer.deleteCustomer)

module.exports = router;