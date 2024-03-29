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
  phone: {
    type: String,
    required: [true, "please add a phone number"]
  },
  type: {
    type: string,
    required: [true, "please add a user type"]
  },
  courses:[{}],
  products:[{}]
  },
  {
    toJSON: {
      virtuals: true,
      transform: function(_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    },
    toObject: {
      virtuals: true,
      transform: function(_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    }
  },{timestamps: true});

module.exports = mongoose.model("User", userSchema);