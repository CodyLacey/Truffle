const Cookbook = require('../models/Cookbook')
const recipeScraper = require('recipe-scraper')

module.exports = {
    grabRecipe: (req, res) => {
        let url = req.body.url
        recipeScraper(url)
        .then(data => {
            res.render('recipe.ejs', {recipe: data})
            console.log(data);
        })
    },
    saveRecipe: async (req, res)=>{
        try{
            await Cookbook.create({url: req.body.url, name: req.body.name, image: req.body.image, microsoftId: req.user.microsoftId})
            console.log('Recipe has been added!')
        }catch(err){
            console.log(err)
        }
    },
}

//name: req.body.name, image: req.body.image,
// app.post('/grabRecipe', (req, res) => {
//     let url = req.body.url

//     recipeScraper(url)
//     .then(data => {
//         res.render('recipe.ejs', {recipe: data})
//         console.log(data);
//     })
// })