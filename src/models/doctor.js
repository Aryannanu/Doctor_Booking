const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    unique: true
  },

  specialization: [String],

  experience: {
    type: String
  },

  education: [String],

  certificates: [String],

  languages: [String],

  about: String,

  consultationModes: [{
    type: String,
    enum: ["online", "offline"]
  }],

  avgRating: {
    type: Number,
    default: 0
  },

  totalReviews: {
    type: Number,
    default: 0
  },

  totalPatients: {
    type: Number,
    default: 0
  },

  isApproved: {
    type: Boolean,
    default: false
  },

  status: {
    type: String,
    enum: [
      "active",
      "inactive",
      "suspended"
    ],
    default: "active"
  },

  profileImage: String,

  refreshToken: String

}, {
  timestamps: true
});


module.exports = mongoose.model("Doctor",doctorSchema);