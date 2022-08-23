const newAuthorModel = require('../models/newAuthorModel.js')


const createAuthor = async function(req, res){
    let data = req.body
    let saveData = await newAuthorModel.create(data)
    res.send({smg: saveData})
}



module.exports.createAuthor= createAuthor