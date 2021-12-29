const fs = require('fs');

const detail = {
    name:"Brij",
    age: 18,
    branch: "CSE"
};

// console.log(detail.age);
// console.log(detail.name);

// const jasondata = JSON.stringify(detail);
// console.log(jasondata);

// const objdata = JSON.parse(jasondata);
// console.log(objdata);

const jasondata = JSON.stringify(detail);
fs.writeFile("Obj.json", jasondata, (err) => {
    console.log("Data added to JSON file");
});

const data = fs.readFile("Obj.json", "utf-8", (err, res) => {
    const objdata = JSON.parse(res);
    console.log(objdata);
    console.log("Data is featched");
});

