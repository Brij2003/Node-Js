const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // console.log(req.url);
    if (req.url == "/home") {
        res.end("Hello from the home page");
    } else if (req.url == "/about") {
        res.write("Hello from the about page");
        res.end();
    } else if (req.url == "/userapi"){
        fs.readFile(`${__dirname}/Userapi/userdata.json`, 'utf-8', (err, data) => {
            res.end(data);
            console.log(data);
        });
    }else {
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1> 404 page given page dosen`t exixt </h1>");
    }
    
});

server.listen(5000, '127.0.0.1', () => {
    console.log("srever is listning")
} );