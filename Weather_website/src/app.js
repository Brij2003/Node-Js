const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const fs = require("fs");
const requests = require("requests");
const port = process.env.PORT || 8000;


const filepath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


hbs.registerPartials(partials_path);
app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.static(filepath));





app.get("/", (req,res) => {
    res.render("index")
});

app.get("/weather", (req,res) => {
    res.render("weather")
});

app.get("/about_me", (req,res) => {
    res.render("about_me")
});

app.get("*", (req,res) => {
    res.send("404 error page")
});

app.listen(port, () => {
    console.log(`listning at port no ${port}`)
});
