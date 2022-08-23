const mongoose = require('mongoose');

const newAuthorSchema = new mongoose.Schema({
   
authorName: String,
age:Number,
address: String,
rating: Number

}, {timestams: true});

module.exports = mongoose.model('Authorabc', newAuthorSchema)