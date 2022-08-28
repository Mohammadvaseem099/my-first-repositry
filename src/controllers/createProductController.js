const createProductModel= require("../models/createProductModel")




const createProduct= async function(req, res){
    let data = req.body
    let allData = await createProductModel.create(data)
        res.send({ msg: allData })
}

module.exports.createProduct = createProduct