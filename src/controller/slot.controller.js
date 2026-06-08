const slotService = require("../services/slot.service");

const generateSlotsController =async(req,res)=>{
   try{
      const {doctorHospitalId} = req.params;
      const result =
         await slotService
         .generateSlotsService(
            doctorHospitalId
         );

      return res.status(201).json({
         success : true,
         message : "Slots generated",
         data : result
      });

   }catch(error){

      console.log(
         "Error in generateSlotsController",
         error
      );

      return res.status(500).json({
         success : false,
         message : error.message
      });
   }
};


const getAvailableSlotsController = async(req,res)=>{
   try{
      const {doctorHospitalId} = req.params;
      const {date} = req.query;
      const slots =
         await slotService
         .getAvailableSlotsService(
            doctorHospitalId,
            date
         );
      return res.status(200).json({
         success:true,
         data:slots
      });

   }catch(error){
      console.log( "Error in getAvailableSlotsController", error );
      return res.status(500).json({
         success:false,
         message:error.message
      });
   }
}

module.exports = { generateSlotsController, getAvailableSlotsController };