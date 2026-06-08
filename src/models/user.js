const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone: {
    type: String,
    unique: true
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"]
  },
  dob: Date,
  bloodGroup: String,
  allergies: [String],
  chronicDiseases: [String],
  emergencyContact: {
    name: String,
    relation: String,
    phone: String
  },
  address: {
    street: String,
    city: String,
    state: String,
    pincode: String
  },
  profileImage: String,
  password: {
    type: String,
    required: true
  },
  walletBalance: {
    type: Number,
    default: 0
  },
  refreshToken: String,
  isBlocked: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true
})

module.exports = mongoose.model("User", userSchema);