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
    image: String,
    properties: {
        // required: true
        // core: String,
        // base_clock: String,
        // tdp: String,
        // socket: String,
        // fan_rpm: String,
        // form_factor: String,
        // ram_slots: mongoose.Types.Decimal128,
        // max_ram: mongoose.Types.Decimal128,
    }
})

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel
