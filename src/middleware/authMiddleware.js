const jwt = require("jsonwebtoken");

const authorisation = async function(req, res, next){
    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "Authentication failed"})
    let verify = jwt.verify(token, "functionup-plutonium-very-very-secret-key")
    if(!verify) return res.send("Authentication missing")
    let userIdToken = verify.userId
    let auth = req.params.userId
    if(auth!==userIdToken) return res.send({status:false, msg:"Authentication failed for matching of userId and TokenId"})
    next()
}
module.exports.authorisation=authorisation