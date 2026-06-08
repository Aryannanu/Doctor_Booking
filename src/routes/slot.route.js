const express = require("express");
const router = express.Router();
const slotController = require("../controller/slot.controller");

router.post("/slot/create/:doctorHospitalId", slotController.generateSlotsController);
router.get( "/slot/:doctorHospitalId", slotController.getAvailableSlotsController);

module.exports = router;