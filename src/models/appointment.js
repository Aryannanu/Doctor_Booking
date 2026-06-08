const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({

   patientId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true
   },

   slotId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Slot",
      required : true
   },
 
   doctorHospitalId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "DoctorHospital",
      required : true
   },

   reason : String,

   status : {

      type : String,

      enum : [
         "booked",
         "completed",
         "cancelled"
      ],

      default : "booked"
   }

},{timestamps:true});


module.exports = mongoose.model("Appointment",appointmentSchema);