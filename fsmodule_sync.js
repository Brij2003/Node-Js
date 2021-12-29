const fs = require('fs');


const a = fs.readFileSync('file1.txt')
console.log(a.toString())

const b = fs.writeFileSync('file2.txt', "This is a data2")
console.log(b)

const c = fs.appendFileSync('file1.txt', '\nThis is another data')
console.log(c)


// fs.renameSync('file.txt','file1.txt')

console.log("Finished reading file")
console.log("Finished writing file")
