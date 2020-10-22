const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

const mongoURI = 'mongodb://localhost:27017/gpupicker'
mongoose.set('useFindAndModify', false)

app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use(express.urlencoded({
    extended: true
}))

//ROUTES

//LISTENER
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(response => {
        console.log('DB connection is successful')
        app.listen(port, () => {
            console.log(`GPU Picker app listening on port: ${port}`)
        })
    })
    .catch(err => {
        console.log(err)
    })

