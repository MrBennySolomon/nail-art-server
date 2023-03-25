const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add product name"]
  },
  url: {
    type: String,
    required: [true, "please add img url"]
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }
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

module.exports = mongoose.model("Video", videoSchema);