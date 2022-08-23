const newPublisherModel = require('../models/newpublisherModel.js')


const createPublisher = async function(req, res){
    let data = req.body
    let saveData = await newPublisherModel.create(data)
    res.send({smg: saveData})
}



module.exports.createPublisher= createPublisher