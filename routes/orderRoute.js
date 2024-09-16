const express= require('express');
const router = express.Router();
const order = require('../controllers/orderController')


router.post('/add',order.createOrder);
 router.get('/',order.getAllOrder)
router.get('/:id',order.getAOrder)
router.put('/:id',order.editOrder);
router.delete('/:id',order.deleteOrder)

module.exports = router;