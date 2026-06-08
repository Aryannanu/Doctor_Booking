const express = require("express");
const router = express.Router();
const appointmentController = require("../controller/appointment.controller");

router.post("/appointment/book", appointmentController.bookAppointmentController);
router.patch("/appointment/cancel/:appointmentId",appointmentController.cancelAppointmentController);

module.exports = router;