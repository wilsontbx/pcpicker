const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    type:{
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    image: String,
    properties: {}
})

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel
