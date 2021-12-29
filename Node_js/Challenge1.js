const fs = require('fs');

fs.mkdirSync('Brij');
console.log("Done!!!!");

fs.writeFileSync('Brij/c1.txt', 'This is challange1');
console.log("Done!!!!");

fs.appendFileSync('Brij/c1.txt', '\nThis is line2');
console.log("Done!!!!");

const data = fs.readFileSync('Brij/c1.txt');
console.log(data.toString());
console.log("Done!!!!");

fs.renameSync('Brij/c1.txt','Brij/Challange1.txt');
console.log("Done!!!!");

fs.rmSync('Brij/Challange1.txt');
console.log("Done!!!!");

fs.rmdirSync('Brij')
console.log("Done!!!!")
