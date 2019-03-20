const port = 8000;
const adress = "172.30.235.145";
const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const ObjectID = require("mongodb").ObjectID;
const Server = require("mongodb").Server;

const app = express();

app.listen(port, adress, function(){
  console.log('Server started on port:', adress+':'+port);
});

//Routes
var index = require("./routes/index");
var questu = require("./routes/questu");
var quests = require("./routes/quests");

//views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/", index);
app.use("/api", questu);
app.use("/api", quests)

