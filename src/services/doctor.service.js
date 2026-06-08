const Doctor = require("../models/doctor");
const DoctorHospital = require("../models/doctorHospital");

const createDoctorService = async ({
  fullName,
  email,
  password,
  phone,
  specialization,
  experience,
  education,
  certificates,
  languages,
  about,
  profileImage,
  consultationModes
}) => {
  try {
    const doctor = await Doctor.create({
      fullName,
      email,
      password,
      phone,
      specialization,
      experience,
      education,
      certificates,
      languages,
      about,
      profileImage,
      consultationModes
    });
    return doctor;
  } catch (error) {
    console.log("Error in doctor service while creating doctor", error);
    throw error;
  }
};

const doctorHospitalService = async ({

   doctorId,
   hospitalId,
   department,
   roomNumber,
   consultationFee,
   workingDays,
   fixedSlots,
   offDates,
   isActive

}) => {

   try {

      const doctorHospital =
         await DoctorHospital.create({

            doctorId,
            hospitalId,
            department,
            roomNumber,
            consultationFee,
            workingDays,
            fixedSlots,
            offDates,
            isActive
         });

      return doctorHospital;

   } catch(error){

      console.log(
         "error in doctorHospitalService",
         error
      );

      throw error;
   }
}

module.exports = { createDoctorService , doctorHospitalService };
