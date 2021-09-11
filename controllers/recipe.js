// const recipeScraper = require('recipe-scraper')

// module.exports = {
//     grabRecipe: async (req, res) => {
//         try{
//             const recipeScraper = require('recipe-scraper')
//             const url = req.body.url
//             let recipe  = await recipeScraper(url)
//             res.render('recipe.ejs', {recipe: recipe})
//             console.log(recipe);
//         }catch(err){
//             console.log(err);
//         }
//     }
// }


// app.post('/grabRecipe', (req, res) => {
//     let url = req.body.url

//     recipeScraper(url)
//     .then(data => {
//         res.render('recipe.ejs', {recipe: data})
//         console.log(data);
//     })
// })