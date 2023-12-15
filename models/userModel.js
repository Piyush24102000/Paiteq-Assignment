const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model.userModel || mongoose.model('userModel', userSchema)