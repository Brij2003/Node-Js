const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err, data) => {
    console.log(err,data)
})

fs.writeFile('file2.txt', "This is a data", () => {
    console.log("Written to the file")
});

console.log("Finished reading file")
console.log("Finished writing file")
