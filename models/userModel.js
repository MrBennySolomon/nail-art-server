const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add the user name"]
  },
  email: {
    type: String,
    required: [true, "please add the user email"]
  },
  password: {
    type: String,
    required: [true, "please add the user password"]
  },
  id: {
    type: Number,
    required: [true, "please add the user id"]
  }
});

module.exports = mongoose.model("User", userSchema);