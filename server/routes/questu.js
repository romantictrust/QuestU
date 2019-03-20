const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");

const db = mongojs("mongodb://sipep:sipep1@ds055945.mlab.com:55945/questu", ["users"]);

const usersCol = db.collection("users");
let globe = {answer : undefined};

router.get("/users", function (req, res, next) {
   db.users.find(function (err, users){
       if (err){
           res.send(err);
       }
       res.json(users);
   })
});

router.post("/tocheckdata", (req, res) => {
    const toCheckBody = req.body;
    usersCol.find().toArray(function(err, docs) {
      if (err) throw err;
      const userBase = docs;
      loop1:
      for (let i = 0; i < userBase.length; i++) {
        let eqProperties = 0;
        const propsConst = 2;
        loop2:
        for (let CBkey in toCheckBody) {
            loop3:
          for (let Bkey in userBase[i]) {
            if (toCheckBody[CBkey] == userBase[i][Bkey] && CBkey == Bkey) {
              console.log(
                "USER : " +
                  toCheckBody[CBkey] +
                  " AND " +
                  "DATABASE : " +
                  userBase[i][Bkey]
              );
              eqProperties++;
              if (eqProperties == propsConst) {
                  break loop2;
              }
              console.log('eqProperties', eqProperties);
              console.log('propsCount', propsConst);
            }
          }
        }
        if (eqProperties == propsConst) {
            console.log("\r\n--- CUSTOMER FOUND ---");
            console.log("matches fields:", eqProperties);
            console.log("should be :", propsConst);
            globe.answer = '1';
            console.log('access : true \r\n');
            break loop1;
          }
        else {
          console.log('\r\n--- WRONG USER --- \r\n');
          if (i == userBase.length - 1){
            globe.answer = '2';
            console.log('access : false \r\n');
          }
        }
      }
    });
  });

  router.get("/verificationpass", (req, res) => {
    res.send(globe);               
   });

  router.post("/pushuser", (req, res) => {
    const user = req.body;
    db.collection("users").insert(user, function(err, res) {
      if (err) throw err;
      console.log("User pushed to users collection");
    });
  })

module.exports = router;