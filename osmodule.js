const os = require('os');

const a = os.freemem();
console.log(`${a /1024 /1024 /1024}`);
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
const b = os.totalmem();
console.log(`${b /1024 /1024 /1024}`);
console.log(os.type());
console.log(os.arch());