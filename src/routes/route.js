const express = require('express');
const lodash = require('lodash')

// const abc= require('../logger/logger.js');
// const xyz= require('../util/helper.js');
// const zab= require('../validator/formatter.js');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first Mohammad Vaseem!')
    // abc.welcome()
    // xyz.datess()
    // xyz.month()
    // xyz.batchInfo()
    // zab.trim()
    // zab.lower()
    // zab.upper()
    let months = ["jan", "feb", "march", "april", "may", "june", "july","august", "september", "octuber", "november", "december"];
    let result = lodash.chunk(months, 4)
    console.log(result)

    let oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    let result1 = lodash.tail(oddNumber)
    console.log(result1)

    console.log(lodash.union([2,3], [1,2], [8,9], [10,12], [10,11]));

    let obj = ([["Horror", "The shining"], ["Drama", "Titanic"], ["Thriller", "Shuttler Island"], ["Fantasy", "Pans labyrinth"]]);
    console.log(lodash.fromPairs(obj))

});

module.exports=router;


