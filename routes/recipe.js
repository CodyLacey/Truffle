const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

router.post('/grabRecipe', recipeController.grabRecipe) 

router.post('/saveRecipe', recipeController.saveRecipe)

module.exports = router