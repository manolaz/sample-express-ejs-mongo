// import mongoose from "mongoose";
let mongoose = require('mongoose')

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

//Export model
module.exports = mongoose.model("User", userSchema);