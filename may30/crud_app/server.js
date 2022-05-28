const express = require("express");
const bodyParser = require("body-parser");
const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.set("view engine", "ejs")

MongoClient.connect(myMongoConnectionString, (err,client) => {
    if(err) return console.error(err);
    console.log("Connected to DB");
    const db = client.db("star-wars-quotes");
    const quotesCollection = db.collection("quotes");

    console.log("logg")

    app.listen(8000, () => {
        console.log("Listening on 8000");
    });
    
    app.get("/", (req,res) => {

        // Get quotes collection from database, find the data, convert it to an array
        db.collection("quotes").find().toArray()
        // Do something with the array
        .then(results => {
            console.log(results)
            // Render ejs file
            res.render("index.ejs", {quotes: results});

        })
        // Handle any errors
        .catch(error => console.error(error));

    });

    app.post("/quotes", (req, res) => {
        quotesCollection.insertOne(req.body)
        .then(result => {
            res.redirect("/");
        })
        .catch(error => console.error(error));
    });

    app.put("/quotes", (req, res) => {
        quotesCollection.findOneAndUpdate(
            {name: "Yoda"},
            {
                $set: {
                    name: req.body.name,
                    quote: req.body.quote
                }
            },
            {
                upsert: true,
            }
        )
        .then(result => {
            console.log(result)
            res.json("Success")
        })
        .catch( error => {
            console.error(error);
        });
    });

    app.delete("/quotes", (req, res) => {
        console.log("You made the following request: ",req)
        quotesCollection.deleteOne(
            {name: req.body.name}
        )
        .then( result => {
            console.log(result)
            if(result.deletedCount === 0)
            {
                return res.json("No quote to delete");
            }
            res.json(`Deleted ${req.body.name}'s quote!`);
        })
        .catch(error => {
            console.error(error);
        })
    });
});