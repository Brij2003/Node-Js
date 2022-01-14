const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Demo2")
    .then(() => console.log("Database connected succesfully..."))
    .catch((err) => console.log(err));

