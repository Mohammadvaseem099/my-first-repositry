const express = require('express');
const router = express.Router();

const createUserController = require("../controllers/createUserController")
const createProductController = require("../controllers/createProductController")
const createOrderController = require("../controllers/createOrderController")



router.post("/createUser", createUserController.createUser)
router.post("/createProduct", createProductController.createProduct)
router.post("/createOrder", createOrderController.createOrder)



















const createProd= require("../controllers/createProductController")

const userController = require("../controllers/createUserController" )

router.post('/createProduct', createProd.createProduct)
router.post('/createUser', userController.createUser)

module.exports = router;