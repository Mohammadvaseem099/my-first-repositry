const express = require('express');
const router = express.Router();

const newAuthorController = require("../controllers/newAuthorController.js")

const newPublisherController = require("../controllers/newPublisherController.js")

const newBook2Controller = require("../controllers/newBookController.js")

const newBookController1 = require("../controllers/newBookController")


router.post("/createAuthor", newAuthorController.createAuthor)

router.post("/createPublisher", newPublisherController.createPublisher)

router.post("/newBookController", newBook2Controller.newBookController)

router.get("/getAllBooksByTheirId", newBookController1.getAllBooksByTheirId)

router.get("/updateData", newBookController1.updateData)

module.exports = router;

