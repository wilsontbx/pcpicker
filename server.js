require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const session = require('express-session')
const productsControllers = require('./controllers/ProductsControllers');
const usersController = require('./controllers/UsersControllers');
const collectionControllers = require('./controllers/CollectionControllers');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
mongoose.set('useFindAndModify', false)

app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    name: "app_session",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600000 } // 3600000ms = 3600s = 60mins, cookie expires in an hour
}))

app.use(setUserVarMiddleware)

//ROUTES
app.get('/pcpicker', productsControllers.index)
app.get('/pcpicker/list', authenticatedOnlyMiddleware, productsControllers.getlist)
app.patch('/pcpicker/:product', authenticatedOnlyMiddleware, productsControllers.addBuild)
app.get('/pcpicker/:product', authenticatedOnlyMiddleware, productsControllers.listProduct)

app.get('/collection',authenticatedOnlyMiddleware, collectionControllers.collection)
app.post('/collection',authenticatedOnlyMiddleware, collectionControllers.newCollection)
app.post('/collection/like/:id',authenticatedOnlyMiddleware, collectionControllers.giveLike)
app.post('/collection/comment/:id',authenticatedOnlyMiddleware, collectionControllers.giveComment)

app.get('/users/register', guestOnlyMiddleware, usersController.showRegistrationForm)
app.post('/users/register', guestOnlyMiddleware, usersController.register)
app.get('/users/login', guestOnlyMiddleware, usersController.showLoginForm)
app.post('/users/login', guestOnlyMiddleware, usersController.login)
app.get('/users/profile', authenticatedOnlyMiddleware, usersController.profile)
app.post('/users/logout', usersController.logout)

//LISTENER
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(response => {
        console.log('DB connection is successful')
        app.listen(process.env.PORT || port, () => {
            console.log(`PC Picker app listening on port: ${port}`)
        })
    })
    .catch(err => {
        console.log(err)
    })

function guestOnlyMiddleware(req, res, next) {
    // check if users if logged in,
    // if logged in, redirect back to dashboard
    if (req.session && req.session.user) {
        res.redirect('/pcpicker/list')
        return
    }

    next()
}

function authenticatedOnlyMiddleware(req, res, next) {
    if (!req.session || !req.session.user) {
        res.redirect('/users/login')
        return
    }

    next()
}

function setUserVarMiddleware(req, res, next) {
    // default users template var set to null
    res.locals.user = null

    // check if req.session.users is set,
    // if set, template users var will be set as well
    if (req.session && req.session.user) {
        res.locals.user = req.session.user
    }

    next()
}
