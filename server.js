const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/database')
const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')
const recipeScraper = require('recipe-scraper')

require('dotenv').config({path: './config/.env'})

require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)


app.post('/grabRecipe', (req, res) => {
    let url = req.body.url

    recipeScraper(url)
    .then(data => {
        res.render('recipe.ejs', {recipe: data})
        console.log(data);
    })
})

app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);
})

