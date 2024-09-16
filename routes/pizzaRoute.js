const express= require('express');
const router = express.Router();
const pizza = require('../controllers/pizzaController')


router.post('/add',pizza.createPizza);
router.get('/',pizza.getAllPizza)
router.get('/:id',pizza.getAPizza)
router.put('/:id',pizza.editPizza);
router.delete('/:id',pizza.deletePizza)

module.exports = router;