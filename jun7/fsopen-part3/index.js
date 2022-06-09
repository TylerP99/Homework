const express = require("express");
const app = express();
app.use(express.json());




const PORT = 3002;


let notes = [  
    {    id: 0,    content: "HTML is easy",    date: "2022-05-30T17:30:31.098Z",    important: true  },  
    {    id: 1,    content: "Browser can execute only Javascript",    date: "2022-05-30T18:39:34.091Z",    important: false  },  
    {    id: 2,    content: "GET and POST are the most important methods of HTTP protocol",    date: "2022-05-30T19:20:14.298Z",    important: true  }
]

/*=======================*/
/*      GET Requests     */ 
/*=======================*/

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
    const id = Number(req.params.id); //Get the id from the request's query parameters
    const note = notes.find(note => note.id === id); //Go through the notes array and find the object with the same id as was given in the req

    //If the note doesn't exist, we need to respond in a way that says something was not found
    if(note) //If the note exists, this will be truthy. If it doesn't, it is falsy
    {
        res.json(note);
    }
    else
    {
        res.status(404).end();
    }
});

/*=======================*/
/*     POST Requests     */ 
/*=======================*/

app.post("/api/notes", (req, res) => {
    const body = req.body; //Get note from request body

    if(!body.content) {
        return res.status(400).json({ //Bad request, code 400
            error: "content missing"
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(),
    }

    notes.push(note);
    console.log(`Successfully added note!`);

    res.json(note); //Lol are we sending it back to see if it is good?
});


app.delete("/api/notes/:id", (req,res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id); // Filter out all notes that do not have the passed id, effectively deleting whatever had the id

    //This code doesn't actually work the way I imagined...
    if(notes.length !== 0)
    {
        res.status(204).end();
    }
    else
    {
        res.status(404).end(); // If we didn't find what we wanted to delete, send 404 not fonud since we didnt find it? This makes sense to me rather than sending the same thing for two different results
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const generateId = () => {
    const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
    return maxId+1;
}

const unknownEndpoint = (req, res) => {
    res.status(404).send({error: "unknown endpoint"})
}
app.use(unknownEndpoint);