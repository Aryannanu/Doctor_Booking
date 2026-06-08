const Slot = require("../models/slot");
const DoctorHospital = require("../models/doctorHospital");

const generateSlotsService = async (doctorHospitalId) => {
   try {
      const doctorHospital =
         await DoctorHospital.findById(
            doctorHospitalId
         );
      if(!doctorHospital){
         throw new Error(
            "Doctor schedule not found"
         );
      }
      const { workingDays,fixedSlots, offDates} = doctorHospital;
      const slotsToInsert = [];
      const today = new Date();
      for(let i=0;i<365;i++){
         const currentDate = new Date();
         currentDate.setDate(
            currentDate.getDate() + i
         );
         const dayName =
            currentDate.toLocaleString(
               "en-US",
               {
                  weekday : "long"
               }
            );

         if(
            !workingDays.includes(dayName)
         ){
            continue;
         }

         const isOffDate = offDates.some(
            offDate =>
               new Date(offDate)
                  .toDateString() ===
               currentDate.toDateString()
         );
         if(isOffDate){
            continue;
         }

         for(const slot of fixedSlots){
            const existingSlot =
               await Slot.findOne({
                  doctorHospitalId,
                  slotDate : currentDate,
                  startTime : slot.startTime
               });
            if(existingSlot){
               continue;
            }

            slotsToInsert.push({
               doctorHospitalId,
               slotDate : currentDate,
               startTime : slot.startTime,
               endTime : slot.endTime,
               status : "available"
            });
         }
      }

      if(slotsToInsert.length > 0){
         await Slot.insertMany(
            slotsToInsert
         );
      }
      return {
         success : true,
         totalSlotsGenerated : slotsToInsert.length
      };
   } catch(error){
      console.log("Error in generateSlotsService",error);
      throw error;
   }
};


const getAvailableSlotsService = async ( doctorHospitalId, date ) => {
   try{
      const startDate = new Date(date);
      startDate.setHours(0,0,0,0);
      const endDate = new Date(date);
      endDate.setHours(23,59,59,999);
      console.log(startDate)

console.log(endDate)
      const slots = await Slot.find({
         doctorHospitalId,
         slotDate : {
            $gte : startDate,
            $lte : endDate
         },
         isBooked : false
      }).sort({startTime:1});
      return slots;
   }catch(error){
      console.log("Error in getAvailableSlotsService", error);
      throw error;
   }
}

module.exports = { generateSlotsService, getAvailableSlotsService };