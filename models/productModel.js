const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add product name"]
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
  stock: {
    type: Number,
    required: [true, "please add stock"]
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
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

module.exports = mongoose.model("Product", productSchema);