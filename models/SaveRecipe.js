const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  microsoftId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('SaveRecipe', RecipeSchema)
