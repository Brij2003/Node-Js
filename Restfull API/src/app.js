const express = require("express");
const { send } = require("express/lib/response");
const app = express();
const Student = require("./modules/student");
require("./db/connect");
const port = process.env.PORT || 8000;

app.use(express.json())

// using promises
// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body)
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(400).send(err);
//     })
// })


// using asyc/await
app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body)
        const saveresultindatabase = await user.save();
        res.status(201).send(saveresultindatabase);
    } catch (err) {
        res.status(400).send(err);
    }
})

app.listen(port, () => {
    console.log(`Server is online at ${port}`)
});