const familyService = require("../services/family.service");

const createFamilyController = async (req, res) => {
    try {
        const { name, age, dob, gender } = req.body;
        const photo = req.file ? req.file.path : null;
        if (!name || !age || !dob || !gender || !photo) {
            return res.send("Every field is compulsory");
        }
        const family = await familyService.creatFamilyService({ name, age, dob, gender, photo});
        res.send(family);
    } catch (error) {
        console.log("error in creating family in controller", error);
        res.send("Server Error");
    }
};

const updateFamilyController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, dob, gender } = req.body;
    const photo = req.file ? req.file.path : null;
    const family = await familyService.updateFamilyService({id,name,age,dob,gender,photo});
    if (!family) {
      return res.send("User not found");
    }
    res.send(family);
  } catch (error) {
    console.log("error in updating family", error);
    res.send("data not updated");
  }
};



module.exports = { createFamilyController, updateFamilyController };