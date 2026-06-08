const Family = require("../models/family");

const creatFamilyService = async ({name,age,dob,gender,photo}) => {
    try{
        const family = await Family.create({name,age,dob,gender,photo});
        return family;
    }catch (error){
        console.log("Error is Service layer while creating it",error)
    }
};


const updateFamilyService = async ({ id, name, age, dob, gender, photo }) => {
  try {
    const family = await Family.findByIdAndUpdate( id, { name, age, dob, gender, photo }, { new: true });
    return family;
  } catch (error) {
    console.log("Error in service while updating", error);
  }
};

module.exports = {creatFamilyService,updateFamilyService};