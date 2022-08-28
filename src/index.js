const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next){
    console.log("inside global middleware")
    next()
})


mongoose.connect("mongodb+srv://Mohammadvaseem099:uDNTAkafkNrYLe0C@cluster0.2npclft.mongodb.net/Mohammadvaseem099",{
useNewUrlParser: true
})
.then( () => console.log("Mongoose is connected"))
.catch ( err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3001, function() {
    console.log(`Express app running on port ${process.env.PORT || 3001}`)
});
