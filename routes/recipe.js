const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

router.post('/grabRecipe', recipeController.grabRecipe) 

module.exports = router