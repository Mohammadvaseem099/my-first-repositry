const BookModel= require("../models/bookModel.js")
const authorModel= require("../models/authorModel.js")
const bookModel = require("../models/bookModel.js")


const createBook= async function(req, res){
    let data = req.body
    let saveData = await BookModel.create(data)
    res.send({msg: saveData})
}

const createAuthor= async function(req, res){
    let data = req.body
    let allData = await authorModel.create(data)
    res.send({msg: allData})
}

const authorAllBook = async function(req, res){
    let ownAuthor= await authorModel.findOne({authorName:"Chetan Bhagat"})
    console.log(ownAuthor);
    let allBooks= await bookModel.find({authorId: ownAuthor.authorId})
    res.send({msg: allBooks})
}

const findAndUpdate = async function(req, res){
    let myBook = await bookModel.findOneAndUpdate({bookName: "Two states"}, 
    {$set : {price: 100}}, {new : true})
    console.log(myBook);
    let authorData = await authorModel.find({authorId: myBook.authorId}).select({authorName: 1})
    res.send({msg: authorData})
}

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.authorAllBook= authorAllBook
module.exports.findAndUpdate= findAndUpdate