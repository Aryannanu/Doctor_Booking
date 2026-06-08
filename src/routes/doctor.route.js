const express = require("express");
const router = express.Router();
const doctorController = require("../controller/doctor.controller");
const familyImg = require("../middlewares/image");

router.post("/doctor/create",familyImg.single("profileImage"), doctorController.createDoctorController);
router.post("/doctorHospital/create",doctorController.doctorHospitalController)

module.exports = router;
