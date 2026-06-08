const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  description: String,

  phone: String,

  email: String,

  address: {
    street: String,
    city: String,
    state: String,
    pincode: String
  },

  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point"
    },

    coordinates: {
      type: [Number]
    }
  },

  departments: [String],

  facilities: [String],

  rating: {
    type: Number,
    default: 0
  },

  totalReviews: {
    type: Number,
    default: 0
  },

  images: [String]

}, {
  timestamps: true
});

module.exports = mongoose.model("Hospital",hospitalSchema);