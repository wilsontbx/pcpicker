const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        max: 100
    },
    last_name: {
        type: String,
        required: true,
        max: 100
    },
    username: {
        type: String,
        required: true,
        unique: true,
        max: 100
    },
    pwsalt: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
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
    build: [{
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
    }],
})

const UserModel = mongoose.model('Users', userSchema)

module.exports = UserModel
