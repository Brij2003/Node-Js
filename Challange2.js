const fs = require("fs");

fs.mkdir('Brij', (err) => {
    console.log("Folder is created");
});

fs.writeFile('Brij/c2.txt', 'This is Challange 2', (err) => {
    console.log("Finished writing");
});

fs.appendFile('Brij/c2.txt', '\nThis is line 2', (err) => {
    console.log("Appended new line");
});

fs.readFile('Brij/c2.txt', 'utf-8', (err, data) => {
    console.log(data)
    console.log("Data is readed");
});

fs.rename('./Brij/c2.txt', './Brij/challange.txt', (err) => {
    console.log("File renamed");
});

fs.unlink('./Brij/challange2.txt', (err) => {
    console.log("Text file deleted");
});

fs.rmdir('Brij', (err) => {
    console.log("Folder removed");
});