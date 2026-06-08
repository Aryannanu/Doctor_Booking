const doctorService = require("../services/doctor.service");

const createDoctorController = async (req, res) => {
  try {
    const {
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
      consultationModes
    } = req.body;
    const profileImage = req.file ? req.file.path : undefined;
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "fullName, email and password are required" });
    }

    const doctor = await doctorService.createDoctorService({
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

    return res.status(201).json(doctor);
  } catch (error) {
    console.log("error creating doctor in controller", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const doctorHospitalController = async (req,res) => {

   try {
      const {
         doctorId,
         hospitalId,
         department,
         roomNumber,
         consultationFee,
         workingDays,
         fixedSlots,
         offDates,
         isActive
      } = req.body;

      const doctorHospital =
         await doctorService
         .doctorHospitalService({
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

      res.send(doctorHospital);

   } catch(error) {
      console.log(
         "error in doctorHospitalController",
         error
      );
   }
}

module.exports = { createDoctorController, doctorHospitalController };
