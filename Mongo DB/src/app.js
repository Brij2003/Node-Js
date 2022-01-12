const mongoose = require('mongoose');
const { getMaxListeners } = require('process');
const { stringify } = require('querystring');

// creating a new connection with any Database
mongoose.connect("mongodb://localhost:27017/Demo1").then(async () => await console.log("connection succesfully established.....")).catch(async (err) => await console.log(err));

// defining schema of our Database
const teamInfo = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profesion: String,
    age: Number,
    mail_id: String,
    course: String
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
            mail_id: "pqr@gmail.com",
            course: "DSAI"
        })
        const backendTeam = new Member({
            name: "Harsh",
            profesion: "Student",
            age: 19,
            mail_id: "har@gmail.com",
            course: "CSE"
        })
        const result = await Member.insertMany([frontendTeam,backendTeam]);
        console.log(result);
    } catch (err)
    { console.log(err) }
}

// createnewDocument();

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

