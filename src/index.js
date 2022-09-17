const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route')
const app = express();
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Mohammadvaseem099:uDNTAkafkNrYLe0C@cluster0.2npclft.mongodb.net/Mohammadvaseem099", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);
app.listen(3210, function () {
    console.log("Express is connected in port:" + 3210);

// app.listen(process.env.PORT || 3000, function () {
//     console.log('Express app running on port ' + (process.env.PORT || 3000))
});



//mongodb+srv://Mohammadvaseem099:uDNTAkafkNrYLe0C@cluster0.2npclft.mongodb.net/Mohammadvaseem099
//mongodb+srv://project2group41:8vsByDXMeUlCc7Fw@cluster0.uax0wkc.mongodb.net/project_OpenToIntern
