const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add the user name"]
  },
  price: {
    type: Number,
    required: [true, "please add price"]
  },
  cartCount: {
    type: Number,
    required: [true, "please add cart count"]
  },
  imgUrl: {
    type: String,
    required: [true, "please add img url"]
  },
  type: {
    type: String,
    required: [true, "please add a user type"]
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  videos:[{}]
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

module.exports = mongoose.model("Course", courseSchema);