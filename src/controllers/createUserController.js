const UserModel= require("../models/createUserModel")

const createUser= async function(req, res){
    let data = req.body
    let allData = await createUserModel.create(data)
        res.send({ msg: allData })
}

const middle = async function (req, res, next){
    let isfreeappuser  = req.headers.isfreeappuser
    if(isfreeappuser){
        if(isfreeappuser=="true"){
            req.body.isFreeAppUser=true
        }
        else if(isfreeappuser=="false"){
            req.body.isFreeAppUser=false
        }; next()
    }
    
   else if(!isfreeappuser){
        res.send("isFreeAppUser is mandatory")
    }
   
}

module.exports = {createUser, middle}