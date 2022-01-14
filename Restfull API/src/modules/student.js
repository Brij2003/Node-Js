const mongoose = require("mongoose");
const validator = require("validator");

const studentRegestration = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    mobile_no: {
        type: String,
        required: true,
        unique: true,
        minlenght:10
    },
    course: {
        type: String,
        required: true,
        uppercase: true,
        enum: ["CSE", "IT", "DSAI", "ECE"]
    }
})

const Student = new mongoose.model("Student", studentRegestration);

module.exports = Student;