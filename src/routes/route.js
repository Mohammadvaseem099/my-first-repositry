const express = require('express');
const router = express.Router();


module.exports = router;
// adding this comment for no reason


let persons = [{
    name: "mv",
    age: 10,
    votingStatus: false
}, 
{
    name: "mw",
    age: 20,
    votingStatus: false
},
{
    name: "mva",
    age: 30,
    votingStatus: false
}, 
{
    name: "mwa",
    age: 70,
    votingStatus: false
}, 
{
    name: "wa",
    age: 5,
    votingStatus: false
},
]

        router.post("/test-post-man", function(req, res){
            let votingAge = req.body;
            let newVotingAge = votingAge;
            let newVote = [];
            for(let i=0; i<person.length; i++){
                if(newVotingAge<=person[i].age){
                    (person[i].votingStatus = true)
                    newVote.push(person[i])
                }
            }
            res.send({newVote})
        })

module.exports = router;