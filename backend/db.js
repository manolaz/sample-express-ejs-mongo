// database
var mongoose = require("mongoose");
const express = require("express");
const app = express();
var port = 4000;
var uri = "mongodb+srv://a:a@cluster0.2ariu.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});

const User = require("./models/user");

// User
//   .find()
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })
// const db = async () => {
//   const allUsers = await User.find().all();
//   console.log(allUsers);
//   return allUsers.json();
// };

var users = exports.users = async () => {
    const allUsers = await User.find().all();
    console.log(allUsers);
    return allUsers.json();
  };
