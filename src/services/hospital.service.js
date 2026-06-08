const Hospital = require("../models/hospital");

const createHospitalService = async ({
  name,
  description,
  phone,
  email,
  address,
  departments,
  facilities,
  images
}) => {
  try {
    const hospital = await Hospital.create({
      name,
      description,
      phone,
      email,
      address,
      departments,
      facilities,
      images
    });
    return hospital;
  } catch (error) {
    console.log("Error in hospital service while creating hospital", error);
    throw error;
  }
};

module.exports = { createHospitalService };
