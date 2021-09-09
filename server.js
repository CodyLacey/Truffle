const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
const recipeScraper = require('recipe-scraper')

// Mongo
let db,
    dbConnectionStr = 'mongodb+srv://db1:1234@cluster0.vjerq.mongodb.net/todo?retryWrites=true&w=majority',
    dbName = 'GroceryList'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`);
        db = client.db(dbName)
    })

//

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    try{
    res.render('index.ejs')
    }catch {
        console.log(err);
    }
})

app.post('/grabRecipe', (req, res) => {
    let url = req.body.url

    recipeScraper(url)
    .then(data => {
        res.render('recipe.ejs', {recipe: data})
        console.log(data);
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on ${PORT}`);
})

