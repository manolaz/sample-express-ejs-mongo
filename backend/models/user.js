// import mongoose from "mongoose";
let mongoose = require('mongoose')
let validator = require('validator')

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
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  },
  phone: {
    type: Number,
    unique: true,
    required: false,
  },
});

userSchema.statics.getUsers = function() {
  return new Promise((resolve, reject) => {
    this.find((err, docs) => {
      if(err) {
        console.error(err)
        return reject(err)
      }
      
      resolve(docs)
    })
  })
}

const User = mongoose.model("User", userSchema);
// export default User;
// module.exports = mongoose.model("User", this.userSchema);
