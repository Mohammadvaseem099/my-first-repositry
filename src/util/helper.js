let dates = new Date();
function datess(){
    console.log("Today's Date is", dates.getDate());
}
function month(){
    console.log("and month is", dates.getMonth()+1)
}
function batchInfo(){
    console.log("Plutonium, W-3, D-5, the topic was today is node.js moduel system")
}
module.exports.datess=datess
module.exports.month=month
module.exports.batchInfo=batchInfo