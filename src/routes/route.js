const express = require('express');
const router = express.Router();
// const userController= require("../controllers/userController")
const userController = require("../controllers/newUserController")

const middle1 = require("../middleware/userMiddleware")
const middle2 = require("../middleware/authMiddleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser2", userController.createUser2)

router.post("/login", userController.login)

router.get("/getUserData/:userId", middle1.middleware, middle2.authorisation, userController.getUserData)

router.get("/updateData/:userId", middle1.middleware, middle2.authorisation, userController.updateData)

router.get("/deleteData/:userId", middle1.middleware, middle2.authorisation, userController.deleteData)


module.exports = router;

























// const createUserController = require("../controllers/createUserController")
// const createProductController = require("../controllers/createProductController")
// const createOrderController = require("../controllers/createOrderController")



// router.post("/createUser", createUserController.createUser)
// router.post("/createProduct", createProductController.createProduct)
// router.post("/createOrder", createOrderController.createOrder)

// const createProd= require("../controllers/createProductController")

// const userController = require("../controllers/createUserController" )

// router.post('/createProduct', createProd.createProduct)
// router.post('/createUser', userController.createUser)

// module.exports = router;