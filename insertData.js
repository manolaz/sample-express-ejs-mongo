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

// userSchema.statics.getUsers = function() {
//   return new Promise((resolve, reject) => {
//     this.find((err, docs) => {
//       if(err) {
//         console.error(err)
//         return reject(err)
//       }
//       resolve(docs)
//     })
//   })
// }

const User = mongoose.model("User", userSchema);
// const Cornelia = new User({"first_name":"Cornelia","last_name":"O'Rudden","email":"corudden17@nsw.gov.au","phone":"862-185-5423"});
var usersObj = require("./mock.json");
// User.insertMany(usersObj);

// FIND OneUser
// User
//   .find({
//     email : "mmoughtony@godaddy.com" // search query
//   })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })

// Get all users
User
  .find()
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
