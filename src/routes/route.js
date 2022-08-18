const express = require('express');
const router = express.Router();

const BookController = require("../controllers/AuthorBookController.js")


router.post('/createBook', BookController.createBook)
router.post('/createAuthor', BookController.createAuthor)
router.get('/authorAllBook', BookController.authorAllBook)
router.get('/findAndUpdate', BookController.findAndUpdate)

module.exports = router;

