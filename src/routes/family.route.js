const express = require('express');
const router = express.Router();
const familyController = require("../controller/family.controller");
const familyImg = require("../middlewares/image");

router.post("/family/signup", familyImg.single("photo"),familyController.createFamilyController);
router.patch("/family/update/:id", familyImg.single("photo"),familyController.updateFamilyController);


module.exports = router;