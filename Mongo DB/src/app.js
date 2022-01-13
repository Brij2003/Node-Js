const mongoose = require('mongoose');
const { getMaxListeners } = require('process');
const { stringify } = require('querystring');
const S = require('string');
const validator = require("validator");

// creating a new connection with any Database
mongoose.connect("mongodb://localhost:27017/Demo1").then(async () => await console.log("connection succesfully established.....")).catch(async (err) => await console.log(err));

// defining schema of our Database
const teamInfo = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 300,
        trim: true,
        required: true
    },
    profesion: {
        type: String,
        lowercase: true,
        required: true,
        enum: ["student", "teacher", "web devloper", "software devloper"]
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 7) {
                throw new Error("The devloper is underage")
            }
        }
    },
    mail_id: {
        type: String,
        required: true,
        unique:true,
        validate(value) {
            if (!S(value).contains(".com")) {
                throw new Error("Entered E-mail is not valid\n Please enter a valid E-mail address")
            } 
            else if (!validator.isEmail(value)) {
                throw new Error("Please enter a valid E-mail address")
            }
        }
    },
    course: {
        type: String,
        uppercase: true,
        required: true,
        enum:["CSE","IT","DSAI","ECE"]
    }
});

// Creating a new model of our teamInfo schema 
const Member = new mongoose.model("Member", teamInfo);

// Creating/inserting new documents
const createnewDocument = async () => {
    try {
        const frontendTeam = new Member({
            name: "Vijay",
            profesion: "Student",
            age: 20,
            mail_id: "rbssrbjgknsibi.com",
            course: "DSAI"
        })
        const result = await Member.insertMany([frontendTeam]);
        console.log(result);
    } catch (err)
    { console.log(err) }
}
createnewDocument();

// Reading documents in Database
const getDocument = async () => {
    try {
        const result = await Member
            .find({ course: "CSE" })
            .select({ name: 1 })
            .limit(1);
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}
// getDocument();

// Comparision operator
const compareDocument = async () => {
    try {
        const result = await Member
            // .find({ age: {$gt:18} })
            .find({ course: {$in:["ECE","DSAI"]} })
            .select({ name: 1 });
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}
// compareDocument();

// Logical operator
const logicalDocument = async () => {
    try {
        const result = await Member
            .find({ $and : [{course : "CSE"}, {age : 19}] })
            .select({ name: 1 })
            .count();
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}
// logicalDocument();

// Sorting and counting
const sortDocument = async () => {
    try {
        const result = await Member
            .find({ $or: [{ course: "CSE" }, { profesion: "Student" }] })
            .select({ name: 1 })
            .sort({name:1});
            // .count();
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}
// sortDocument();

// Updating the documents
const updateDocument = async (_id) => {
    try {
        const result = await Member.updateOne({ _id }, {
            $set: {
                profesion: "Teacher"
            }
        });
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}
// updateDocument("61df1074ee1a33923405e366");

// Deleting the document
const deleteDocument = async (_id) => {
    try {
        const result = await Member.deleteOne({ _id });
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}
// deleteDocument("61e073a53ed88fcca2d18f45");

