const http = require('http'); // Import http module
const fs = require('fs') // Import file system module
const url = require('url'); // Import url module
const querystring = require('querystring'); // IDK what module the last two are yet
const figlet = require('figlet')

const server = http.createServer((req, res) => { // Create server object and store reference in server
  const page = url.parse(req.url).pathname; // Turn url from request into a URL object, extract pathname, store it in page
  const params = querystring.parse(url.parse(req.url).query); // Turns the url from request into a URL object, the query data is extracted then turned into key, value pairs and stored in params
  console.log(page); // You know what this does
  // I argue the switch makes the horrible nested if elses below a lot more readable. Dynamic path is probably better. Alot better...
  switch(page)
  {
    case '/': // If the requesting url was from the root, serve index.html
      fs.readFile('index.html', function(err, data) { //Read the content of index.html
        res.writeHead(200, {'Content-Type': 'text/html'}); //Set up successful response header
        res.write(data); // Write index.html contents to response
        res.end(); // End response
      });
      break;

    case '/otherpage': //Next two are same as above for other html pages
      fs.readFile('otherpage.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
      break;

    case '/otherotherpage': // ^
      fs.readFile('otherotherpage.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
      break;

    case '/api': // This happens if we request from api
      if('student' in params){ // If student is in params do below
        if(params['student']== 'leon'){ // If the student is leon
          res.writeHead(200, {'Content-Type': 'application/json'}); // Write success header and that we want to return json
          const objToJson = { // Object to return
            name: "leon",
            status: "Boss Man",
            currentOccupation: "Baller"
          }
          res.end(JSON.stringify(objToJson)); // Convert object to JSON, end response and sent the JSON
        }//student = leon
        else if(params['student'] != 'leon'){ // Same as above except this isnt leon's response
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "unknown",
            status: "unknown",
            currentOccupation: "unknown"
          }
          res.end(JSON.stringify(objToJson));
        }//student != leon
      }//student if
      break;

    case '/css/style.css': // Want the css
      fs.readFile('css/style.css', function(err, data) {
        res.write(data); // Implicit header writing idk?
        res.end(); 
      });
      break;

    case '/js/main.js': // Loads js, with js header info
      fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
      break;

    default: // The uh oh code
      figlet('404!!', function(err, data) { // Is figlet the funny letter art? Really?
        if (err) { // If our error code gives us an error, log the error and error object properties
            console.log('Something went wrong...');
            console.dir(err);
            return; //Gtfo, we messed up
        }
        res.write(data); //Send data
        res.end(); //End, well this really sends the data too i guess, the above one writes it
      });
      break;
  }
});

server.listen(8000); // Listen on port 8000
