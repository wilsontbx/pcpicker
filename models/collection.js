const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 100
    },
    username: {
        type: String,
        required: true,
        max: 100
    },
    image:String,
    description: String,
    likes: [String],
    comment: [{
        content: String,
        created_at: {
            type: Date,
            required: true,
            default: Date.now
        },
        updated_at: {
            type: Date,
            required: true,
            default: Date.now
        }
    }],
    build: {},
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

})

const CollectionModel = mongoose.model('Collection', collectionSchema)

module.exports = CollectionModel
