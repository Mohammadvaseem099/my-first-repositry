const express = require('express');
const abc= require('../logger/logger.js');
const xyz= require('../util/helper.js');
const zab= require('../validator/formatter.js');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first Mohammad Vaseem!')
    abc.welcome()
    xyz.datess()
    xyz.month()
    xyz.batchInfo()
    zab.trim()
    zab.lower()
    zab.upper()
});
module.exports=router;

