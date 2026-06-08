const appointmentService = require("../services/appointment.service");


const bookAppointmentController = async(req,res)=>{
   try{
      const {patientId,slotId } = req.body;
      const appointment = await appointmentService .bookAppointmentService({ patientId,slotId });
      return res.status(201).json({
         success : true,
         message :"Appointment booked successfully",
         data : appointment
      });
   }catch(error){
      console.log( "Error in bookAppointmentController", error );
      return res.status(500).json({
         success : false,
         message : error.message
      });
   }
}


const cancelAppointmentController =
async(req,res)=>{
   try{
      const {appointmentId}  = req.params;
      const appointment =
         await appointmentService.cancelAppointmentService( appointmentId );
      return res.status(200).json({
         success : true,
         message : "Appointment cancelled",
         data : appointment
      });
   }catch(error){
      console.log("Error in cancelAppointmentController",error );
      return res.status(500).json({
         success : false,
         message : error.message
      });
   }
}



module.exports = { bookAppointmentController, cancelAppointmentController};