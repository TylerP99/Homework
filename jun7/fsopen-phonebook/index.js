const express = require("express");
const morgan = require("morgan");

function morganLogger(tokens, req, res) {
    let log = [
        tokens.method(req,res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req,res,"content-length"), "-",
        tokens["response-time"](req,res), "ms",
    ];

    if(tokens.method(req, res) == "POST")
    {
        log.push(JSON.stringify(req.body));
    }

    return log.join(" ")
}
const app = express();
app.use(express.json());
app.use(morgan(morganLogger));

const PORT = 3004;
let phonebookEntries = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

// 3.1: Phonebook backend step1

// Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons.

//Straegy: get request to api url

//Just a little something for the index so it isn't empty
app.get("/", (req, res) => {
    res.send("<h1>Phone book</h1>");
});

app.get("/api/persons", (req, res) => {
    res.json(phonebookEntries);
});

// 3.3: Phonebook backend step3

// Implement the functionality for displaying the information for a single phonebook entry. The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5

// If an entry for the given id is not found, the server has to respond with the appropriate status code.
app.get("/api/persons/:id", (req, res) => {
    const reqId = Number(req.params.id);
    const entry = phonebookEntries.find( x => x.id === reqId);

    if(entry){
        res.json(entry);
    }
    else
    {
        console.log(`Entry ${reqId} not found`)
        res.status(404).end();
    }
});

// 3.2: Phonebook backend step2

// Implement a page at the address http://localhost:3001/info 

// The page has to show the time that the request was received and how many entries are in the phonebook at the time of processing the request.
app.get("/info", (req, res) => {
    const entryCount = phonebookEntries.length;

    res.send(`<p>Phonebook has infor for ${entryCount} people!</p><p>${new Date()}</p>`)
});

// 3.5: Phonebook backend step5

// Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address http://localhost:3001/api/persons.

// Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate ids is small.
function generateId() {
    return Math.floor(Math.random()*1000000);
}

app.post("/api/persons", (req, res) => {
    const body = req.body;

    // 3.6: Phonebook backend step6

    // Implement error handling for creating new entries. The request is not allowed to succeed, if:

    //     The name or number is missing
    //     The name already exists in the phonebook

    // Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error.
    if(!req.body.name || !req.body.number)
    {
        return res.status(400).json({
            error:"content missing"
        });
    }
    if(phonebookEntries.find( x => x.name === req.body.name))
    {
        return res.status(400).json({
            error:"name already exists in phonebook!"
        });
    }

    const newEntry = {
        "id":generateId(),
        "name": req.body.name,
        "number": req.body.number
    };

    phonebookEntries.push(newEntry);
    res.json(newEntry); //Not sure if send back json or just status code
})

// 3.4: Phonebook backend step4

// Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.

// Test that your functionality works with either Postman or the Visual Studio Code REST client.
app.delete("/api/persons/:id", (req, res) => {
    const reqId = Number(req.params.id);
    const oldSize = phonebookEntries.length;

    phonebookEntries = phonebookEntries.filter( x => x.id !== reqId);

    if(oldSize !== phonebookEntries.length)
    {
        res.status(202).end(); //Successful deletion
    }
    else
    {
        res.status(404).end() //Content to delete not found
    }
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});