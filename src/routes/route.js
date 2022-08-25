const express = require('express');
const router = express.Router();

const moment = require('moment');

const mid1 = async function(req, res){
    let currentTime = moment();
    let ipAdd = req.ip
    let path = req.originalUrl
    console.log(currentTime, ipAdd, path)
//     console.log(ipAdd)
//     console.log(path)
}

router.get("/middle", mid1)

module.exports = router;









// const createProd= require("../controllers/productController")

// router.post('/createProduct', createProd.createProduct)
