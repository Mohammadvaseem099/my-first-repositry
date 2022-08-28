const createOrderController = require("../models/createOrderModel")

const createOrder = async function(req, res){
    let data = req.body
    let saveddata = await createOrderController.create(data)
    res.send({msg: saveddata})
}

module.exports.createOrder = createOrder