const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    secondName: String,
    mobile: {
        type: String,
        unique: String,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]},
        age: Number,
    

}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)