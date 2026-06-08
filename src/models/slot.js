const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({

  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },

  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital"
  },

  doctorHospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DoctorHospital"
  },

  slotDate: {
    type: Date,
    required: true
  },

  startTime: String,

  endTime: String,

   status : {

      type : String,
      enum : [
         "available",
         "booked",
         "cancelled",
         "holiday"
      ],
      default : "available"
   },

  isBooked: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true
})

module.exports = mongoose.model("Slot",slotSchema);