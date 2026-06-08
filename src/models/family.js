const mongoose = require("mongoose");

const familySchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true, 
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: {
            values: ["male", "female", "others"],
            message: "Please enter valid gender"
        }
    },
    photo: {
        type: String,
        default: "https://up.yimg.com/ib/th/id/OIP.Dv0o4a1pPHeHHrQ5-qQLIQHaHY?pid=Api&rs=1&c=1&qlt=95&w=123&h=123",
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Family", familySchema);