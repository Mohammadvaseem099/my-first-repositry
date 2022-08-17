// const mongoose= require('mongoose');

// const bookSchema = new mongoose.Schema({
//     bookName: String,
//     authorName: String,
//     tags: [String],

//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         uropePrice: String,
//     },
//     sales: {types: Number, default: 10}
    

// }, {timestamps: true});

// module.exports = mongoose.model('Book', bookSchema)//books

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    totalPages: Number,
    year: {type: Number, default: 2020},
    
    
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    stockAvailable: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)//books