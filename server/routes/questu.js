const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");

const db = mongojs("mongodb://sipep:sipep1@ds055945.mlab.com:55945/questu", [
  "users"
]);

const usersCol = db.collection("users");
let axcess = {answer : '0', message: ''}

router.get("/users", function(req, res, next) {
  db.users.find(function(err, users) {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
});

router.post("/tocheckdata", (req, res) => {
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
          console.log(" --- USER FOUND --- ");
          axcess = {answer: '1', message: 'User verified'}
          res.send(axcess)
          break loop0;
        }
      }
      if (axcess.answer == '0'){
        axcess = {answer: '0', message: 'Wrong user'}
        res.send(axcess)
      }
    });
});

router.post("/pushuser", (req, res) => {
  const user = req.body;
  db.collection("users").insert(user, function(err, res) {
    if (err) throw err;
    console.log("User pushed to users collection");
  });
});

module.exports = router;
