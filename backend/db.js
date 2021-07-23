// database
var mongoose = require("mongoose");
const express = require("express");
// let userShema = require("./models/user");
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

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    unique: false,
    required: true,
  },
  last_name: {
    type: String,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema);

User
  .find()
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
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
