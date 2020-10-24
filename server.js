require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const productsControllers = require('./controllers/productsControllers');
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

//ROUTES
app.get('/pcpicker/list',productsControllers.getlist)
app.get('/pcpicker/:product',productsControllers.listProduct)

//LISTENER
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(response => {
        console.log('DB connection is successful')
        app.listen(port, () => {
            console.log(`PC Picker app listening on port: ${port}`)
        })
    })
    .catch(err => {
        console.log(err)
    })

