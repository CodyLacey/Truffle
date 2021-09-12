const express = require('express')
const router = express.Router()
const cookbookController = require('../controllers/cookbook') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, cookbookController.getRecipes)

router.delete('/deleteRecipe', cookbookController.deleteRecipe)

module.exports = router