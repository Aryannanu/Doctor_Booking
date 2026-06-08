const hospitalService = require("../services/hospital.service");

const createHospitalController = async (req, res) => {
  try {
    const {
      name,
      description,
      phone,
      email,
      street,
      city,
      state,
      pincode,
      departments,
      facilities
    } = req.body;
    const images = req.files?.images
      ? req.files.images.map(file => file.path)
      : [];
    

    if (!name) {
      return res.status(400).json({ message: "Hospital name is required" });
    }

    const hospital = await hospitalService.createHospitalService({
      name,
      description,
      phone,
      email,
      address: {
        street,
        city,
        state,
        pincode
      },
      departments,
      facilities,
      images
    });

    return res.status(201).json(hospital);
  } catch (error) {
    console.log("error creating hospital in controller", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createHospitalController };
