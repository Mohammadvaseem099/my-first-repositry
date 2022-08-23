const { model } = require('mongoose')
const newAuthorModel = require('../models/newAuthorModel.js')
const newBookModel = require('../models/newBookModel.js')
const newPublisherModel = require('../models/newpublisherModel.js')


const newBookController = async function(req, res){
    let data =req.body
    let authorById = await newAuthorModel.findById(data.authorId)
    let publisherById = await newPublisherModel.findById(data.publisherId)
    if (!data.authorId){
        return res.send("authorid is required")
    }
    else if(!authorById){
        return res.send("authorId is invalid")
    }
    else if(!data.publisherId){
        return res.send("publisherId is required")
    }
    else if(!publisherById){
        return res.send("publisherId is invalid")
    }
}

const getAllBooksByTheirId = async function(req,res){
    let allBooks = await newBookModel.find().populate(['authorId','publisherId'])
    res.send({msg:allBooks})
}
const updateData = async function(req, res){
    let bookPublishedUpdate = await newPublisher.find({name:{$in:["Penguin","HarperCollinse"]}})
    let bookBymodel = await book2.find({publisher_id:bookPublishedUpdate}).updateMany({$set:{isHardCover:true, new:true}})
    let authorRating = await authorById.find({rating:{$gt:3.5}})
    let updatePrice = await book2.find({author_id:authorRating}).updateMany({$inc:{price:+10}})
    res.send({updatedBooks:[bookBymodel, updatePrice]})
}
module.exports = {newBookController,getAllBooksByTheirId,updateData}

