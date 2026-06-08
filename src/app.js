const express = require("express");
const app = express();
app.use(express.json());
const {connectDb} = require("./config/database.js");

const familyRouter = require("./routes/family.route");
app.use(familyRouter);
const userRouter = require("./routes/user.route");
app.use(userRouter);
const doctorRouter = require("./routes/doctor.route");
app.use(doctorRouter);
const hospitalRouter = require("./routes/hospital.route");
app.use(hospitalRouter);
const appointmentRouter = require("./routes/appointment.route");
app.use(appointmentRouter);
const slotRouter = require("./routes/slot.route");
app.use(slotRouter);
app.listen(5005,()=> {
    console.log("server is running at port 5005");
});

connectDb();