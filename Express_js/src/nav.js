const path = require("path");
const express = require("express");

const app = express();

a = path.join(__dirname, "../public");

app.use(express.static(a))

app.get("/", (req, res) => {
    res.send("");
});

app.listen(5000, () => {
    console.log("Done!!")
});