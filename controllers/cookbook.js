const Cookbook = require('../models/Cookbook')

module.exports = {
    getRecipes: async (req,res)=>{
        console.log(req.user)
        try{
            //Do we want to grab all the todos?
            const cookbookItems = await Cookbook.find({microsoftId: req.user.microsoftId})
            //How can we grab our logged in users left to dos?
            res.render('cookbook.ejs', {recipe: cookbookItems, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    deleteRecipe: async (req, res)=>{
        console.log(req.body.recipeIdFromJSFile)
        try{
            await Cookbook.findOneAndDelete({_id:req.body.recipeIdFromJSFile})
            console.log('Deleted Recipe')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    