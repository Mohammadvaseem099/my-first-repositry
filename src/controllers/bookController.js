const BookModel= require("../models/bookmodel.js")


const createBook= async function(req, res){
    let data = req.body
    let createData = await BookModel.create(data)
    res.send({msg: createData})
}

const bookList= async function(req, res){
    let allBooks = await BookModel.find().select({bookName: 1, authorName: 1} )
    res.send({msg: allBooks})
}

const getBookslnYear= async function(req, res){
    let allBook = await BookModel.find({year: 2020, authorName: "Robert C. Martin"})
    res.send({msg: allBook})
}

const getParticularBooks= async function(req, res){
    let input= req.body
    let allBook = await BookModel.find(input)
    res.send({particular: allBook})
}

const getXINRBooks= async function(req, res){
    let allBook = await BookModel.find( {"prices.indianPrice" : { $in : [ "200 INR", "500 INR"] }})
    res.send({msg: allBook})
}

const getRandomBooks= async function(req, res){
    let allBook = await BookModel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
    res.send({msg: allBook})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBookslnYear= getBookslnYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks