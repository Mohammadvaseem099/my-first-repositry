const mongoose = require("mongoose")

const newUserModel = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobile : Number,
    emailId : String,
    password : String,
    gender : {
        type:String,
        enum : ["male", "female", "others"]
    },
	isDeleted: {
        type:Boolean,
        default:false
    },
    age : Number
}, { timestamps: true });

module.exports = mongoose.model('TokenUser2', newUserModel)