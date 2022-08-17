const express = require('express');
const router = express.Router();

const BookController = require("../controllers/bookController.js")


router.post('/createbook', BookController.createBook)

router.get('/bookList', BookController.bookList)

router.post('/getBookslnYear', BookController.getBookslnYear)

router.post('/getParticularBooks', BookController.getParticularBooks)

router.get('/getXINRBooks', BookController.getXINRBooks)

router.get('/getRandomBooks', BookController.getRandomBooks)

module.exports = router;
