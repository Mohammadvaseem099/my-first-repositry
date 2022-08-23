const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema({
        bookName: String,
		authorId: {
            type: ObjectId,
            ref: "Authorabc"
        },
        price: Number,
		ratings:Number,

        publisherId: {
            type: ObjectId,
            ref: "myNewPublisher"
        },

}, {timestams: true});

module.exports = mongoose.model('myNewBook', newBookSchema)