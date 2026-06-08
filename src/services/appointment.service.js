const Appointment = require("../models/appointment");
const Slot = require("../models/slot");
const mongoose = require("mongoose");


const bookAppointmentService = async({patientId,slotId}) => {
   const session = await mongoose.startSession();
   session.startTransaction();
   try{
      const slot =
         await Slot.findOneAndUpdate(
            {
               _id : slotId,
               isBooked : false
            },
            {
               $set : {
                  isBooked : true
               }
            },
            {
               new : true,
               session
            }
         );
      if(!slot){
         throw new Error("Slot already booked" );
      }
      const appointment =
         await Appointment.create(
            [
               {
                  patientId,
                  slotId,
                  doctorHospitalId : slot.doctorHospitalId,
                  status : "booked"
               }
            ],
            {session}
         );
      await session.commitTransaction();
      session.endSession();
      return appointment[0];
   }catch(error){
      await session.abortTransaction();
      session.endSession();
      console.log( "Error in bookAppointmentService", error );
      throw error;
   }
}


const cancelAppointmentService = async(appointmentId)=>{
   try{
      const appointment = await Appointment.findById( appointmentId );
      if(!appointment){
         throw new Error( "Appointment not found" );
      }
      if( appointment.status === "cancelled" ){
         throw new Error("Appointment already cancelled");
      }
      appointment.status = "cancelled";
      await appointment.save();
      await Slot.findByIdAndUpdate(
         appointment.slotId,
         {
            $set : {
               status : "available"
            }
         }
      );
      return appointment;
   }catch(error){
      console.log( "Error in cancelAppointmentService", error  );
      throw error;
   }
}

module.exports = { bookAppointmentService, cancelAppointmentService };