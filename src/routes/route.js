const express = require('express');
const router = express.Router();

const UserController = require("../controllers/userController")

router.get('/test-me', function(req, res){
    res.send("This is my fist api!")
})

router.post('/test-one-me', UserController.createUser)

router.post('/test-two-me', UserController.getUsersData)

module.exports = router;
