const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");

const db = mongojs("mongodb://sipep:sipep1@ds055945.mlab.com:55945/questu", ["quests"]);

const questsCol = db.collection("quests");
let globe = {answer : undefined};

router.get("/quests", function (req, res, next) {
   db.quests.find(function (err, quests){
       if (err){
           res.send(err);
       }
       res.json(quests);
   })
});

module.exports = router;