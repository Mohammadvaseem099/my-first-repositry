const userModel2 = require("../models/newUserModel");
const jwt = require("jsonwebtoken");

const createUser2 = async function(req,res){
    let data = req.body
    let user = await newUserModel.create(data)
    res.send({status:true, msg:user})
};

const login = async function(req,res){
    let userName2 = req.body.emailId
    let password = req.body.password

    let check = await newUserModel.findOne({emailId:userName2, password:password})
    if(!check) return res.send({status:false, msg: "UserId or password are invalid"})
    let token = jwt.sign(
        {
          userId: check._id.toString(),
          batch: "plutonium",
          organisation: "FunctionUp",
        },
        "functionup-plutonium-very-very-secret-key"
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, token: token });

    }

const getUserData = async function (req, res) {
    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token must be present" })
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken)

        return res.send({ status: false, msg: "token is invalid" });

    let userId = req.params.userId
    let userDetails = await newUserModel.findById(userId)
    if (!userDetails) return res.send({ status: false, msg: "User Details are invalid" })
    res.send({status:true, msg:userDetails})
    }

const updateData = async function (req, res){
    let userId = req.params.userId
    let findAndUpdate = await newUserModel.findOneAndUpdate({_id:userId}, {$set:{firstName:"Aryan", lastName:"Afridi"}}, {new:true});
    res.send({status:true, msg:findAndUpdate})

}

const deleteData = async function(req,res){
    let userId = req.params.userId
    let findAndUpdate = await newUserModel.findOneAndUpdate({_id:userId}, {$set:{isDeleted:true}}, {new:true});
    res.send({status:true, msg:findAndUpdate})
}
module.exports={createUser2,login,getUserData,updateData,deleteData}