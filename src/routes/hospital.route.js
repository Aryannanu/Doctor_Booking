const express = require("express");
const router = express.Router();
const hospitalController = require("../controller/hospital.controller");
const familyImg = require("../middlewares/image");

router.post("/hospital/create",familyImg.array("images",3), hospitalController.createHospitalController);


module.exports = router;
