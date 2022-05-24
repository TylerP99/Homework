const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname; // Get the pathname from the requesting url

    console.log(`Requested: ${page}`);

    if(page == "/") {
        fs.readFile("index.html", (err,data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    }
    else if(page == "/api") {
        const randomNumber = Math.floor(Math.random()*2) //Generate a random number from 0-1
        const coin = (randomNumber == 0) ? "heads" : "tails";
        const jsonCoin = { "flipResult":coin };
        
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(jsonCoin));
    }
    else if(page == "/public/css/style.css")
    {
        fs.readFile("public/css/style.css", (err,data) => {
            res.writeHead(200, {"Content-Type":"text/css"});
            res.write(data);
            res.end();
        });
    }
    else if(page == "/public/js/main.js")
    {
        fs.readFile("public/js/main.js", (err,data) => {
            res.writeHead(200, {"Content-Type": "text/js"});
            res.write(data);
            res.end();
        });
    }
    else
    {
        fs.readFile("public/404.html", (err,data) => {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
});

server.listen(8000);