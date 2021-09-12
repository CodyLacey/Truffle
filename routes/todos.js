const express = require('express')
const router = express.Router()
const groceryController = require('../controllers/grocery') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, groceryController.getTodos)

router.post('/createTodo', groceryController.createTodo)

router.put('/markComplete', groceryController.markComplete)

router.put('/markIncomplete', groceryController.markIncomplete)

router.delete('/deleteTodo', groceryController.deleteTodo)

module.exports = router