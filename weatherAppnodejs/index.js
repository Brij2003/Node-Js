const http = require("http");
const fs = require("fs");
let requests = require("requests");

const homefile = fs.readFileSync("home.html", 'utf-8');

const replaceval = (tempval, origval) => {
    let temperature = tempval.replace("{%tempval%}", origval.main.temp);
    temperature = temperature.replace("{%windspeed%}", origval.wind.speed);
    temperature = temperature.replace("{%humidity%}", origval.main.humidity);
    temperature = temperature.replace("{%location%}", origval.name);
    temperature = temperature.replace("{%country%}", origval.sys.country);
    return temperature;
};
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=bhavnagar&appid=094ca8938ca7c65797a00d3748f85254')
            .on('data', (chunk) => {
                const objdata = JSON.parse(chunk);
                const arrdata = [objdata];
                // console.log(arrdata);
                const realtimedata = arrdata.map((val) => replaceval(homefile, val)).join("");
                // console.log(realtimedata);
                res.write(realtimedata);
            })
            .on('end',(err) => {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
            });
    }
});

server.listen(5000, "127.0.0.1");