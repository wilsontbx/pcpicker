const mongoose = require('mongoose')

const editSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        max: 100
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    currentBuild: {
        cpu: {},
        cooler: {},
        motherboard: {},
        ram: {},
        gpu: {},
        storage: {},
        psu: {},
        case: {},
        totalPrice:{
            type:mongoose.Types.Decimal128,
            default:0
        },
    },
})

const EditModel = mongoose.model('Edit', editSchema)

module.exports = EditModel
