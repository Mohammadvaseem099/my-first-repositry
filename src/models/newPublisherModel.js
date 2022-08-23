const mongoose = require('mongoose');

const newPublisherSchema = new mongoose.Schema({
   
    publisherName: String,

    headQuarter: String,

},{timestams: true});

module.exports = mongoose.model('myNewPublisher', newPublisherSchema)