const mongoose = require('mongoose');

const productSchema =  mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true , default: "category" },
    price: { type: Number, required: true , default: 0.0},
    image: { type: String, required: false },
  },
  {
    Timestamps: true
  },
);

module.exports = mongoose.model('product',productSchema)