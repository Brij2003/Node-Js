const { Router } = require('express');
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world! from the Home page.")
});

app.get("/admin", (req, res) => {
    res.send("Hello world! from the admin page.")
});

app.listen(5000, () => {
    console.log("Done!!")
});

// get - read any data
// post - creat a data
// put - update any data
// delete - delete data