const mongoose = require("mongoose");

const doctorHospitalSchema = new mongoose.Schema({

   doctorId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Doctor",
      required : true
   },

   hospitalId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Hospital",
      required : true
   },

   department : {
      type : String,
      required : true
   },

   roomNumber : String,

   consultationFee : Number,

   workingDays : {

      type : [String],

      default : [
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday"
      ]
   },

   fixedSlots : [

      {
         startTime : String,
         endTime : String
      }

   ],

   offDates : [
      {
         type : Date
      }
   ],

   isActive : {
    type : Boolean,
    default : true,
   }

},{timestamps:true});

module.exports = mongoose.model("doctorHospital",doctorHospitalSchema);