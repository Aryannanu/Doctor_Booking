const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");


router.post("/user/SignUp",userController.userSignUpController);
router.post("/user/login",userController.userLoginController);

module.exports = router;

