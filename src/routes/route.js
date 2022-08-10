const express = require('express');
const router = express.Router();
// const lodash = require('lodash');


// const abc= require('../logger/logger.js');
// const xyz= require('../util/helper.js');
// const zab= require('../validator/formatter.js');


// router.get('/test-me', function (req, res) {
//     res.send('My first Mohammad Vaseem!')
    // abc.welcome()
    // xyz.datess()
    // xyz.month()
    // xyz.batchInfo()
    // zab.trim()
    // zab.lower()
    // zab.upper()
//     let months = ["jan", "feb", "march", "april", "may", "june", "july","august", "september", "octuber", "november", "december"];
//     let result = lodash.chunk(months, 4)
//     console.log(result)

//     let oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
//     let result1 = lodash.tail(oddNumber)
//     console.log(result1)

//     console.log(lodash.union([2,3], [1,2], [8,9], [10,12], [10,11]));

//     let obj = ([["Horror", "The shining"], ["Drama", "Titanic"], ["Thriller", "Shuttler Island"], ["Fantasy", "Pans labyrinth"]]);
//     console.log(lodash.fromPairs(obj))

// });


// router.get("/test-all", function (req, res){
//     let arr = [1, 2, 3, 5, 6, 7]
//     let total = 0;
//     for(var i in arr){
//         total += arr[i];
//     }
//     let lastDigit=arr.pop()
//     let consecutiveSum=lastDigit + (lastDigit+i)/2
//     let missingNumber= consecutiveSum - total

//     res.send({ data: missingNumber});
// })

router.get('/sol1', function (req, res) {
    let arr = [1,2,3,5,6,7]
    let len = arr.length
    let sum = 0;
    for (var i in arr)
    sum += arr[i]
    let firstNum = arr[0]
    let lastNum = arr.pop()
    let sumFirstplusLastNum = firstNum+lastNum;
    let missNum = (len+1)*(sumFirstplusLastNum)/2-sum;
    res.send({data:missNum});

});

router.get('/sol2', function (req, res) {
    let arr = [33,34,35,37,38];
    let len = arr.length
    let sum = 0;
    for (var i in arr)
    sum += arr[i]
    let firstNum = arr[0]
    let lastNum = arr.pop()
    let sumFirstplusLastNum = firstNum+lastNum;
    let missNum = (len+1)*(sumFirstplusLastNum)/2-sum;
    res.send({data:missNum});

});

module.exports=router;


