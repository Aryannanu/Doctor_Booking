const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = "Images/";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const familyImg = multer({ storage });

module.exports = familyImg;
