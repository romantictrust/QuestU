const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");

const db = mongojs("mongodb://sipep:sipep1@ds055945.mlab.com:55945/questu", [
  "users"
]);

const usersCol = db.collection("users");
let global = { answer: "0" };

router.get("/users", function(req, res, next) {
  db.users.find(function(err, users) {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
});

router.post("/tocheckdata", (req, res) => {
  let processing = new Promise(function(resolve, reject) {
    const toCheckBody = req.body;
    usersCol.find().toArray(function(err, docs) {
      if (err) throw err;
      const userBase = docs;
      loop0: for (let i = 0; i < userBase.length; i++) {
        console.log(
          `Expected: ${userBase[i].login} / Got: ${toCheckBody.login}`
        );
        console.log(
          `Expected: ${userBase[i].password} / Got: ${toCheckBody.password}`
        );
        if (
          userBase[i].login == toCheckBody.login &&
          userBase[i].password == toCheckBody.password
        ) {
          console.log("OK");
          global.answer = "1";
          break loop0;
        } else {
          console.log("NOT OK");
          global.answer = "2";
        }
      }
    });
    resolve(global.answer);
  });
  processing.then(
    result => {
      console.log("GLOBAL: " + result);
      res.status(200).send(global);
    },
    err => {
      console.log("!ERROR!");
    }
  );
});

router.post("/pushuser", (req, res) => {
  const user = req.body;
  db.collection("users").insert(user, function(err, res) {
    if (err) throw err;
    console.log("User pushed to users collection");
  });
});

module.exports = router;
