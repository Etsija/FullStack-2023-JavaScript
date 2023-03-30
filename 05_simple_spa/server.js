const express = require("express");

// Initialise Express
let app = express();

// Entry point of the static part of the app
app.use("/", express.static("public"));

// We handle JSON objects, so this is needed
app.use(express.json());

// Initialise our "database"
let database = [];
let id = 100;

// REST
/*
CREATE - POST "/api/contact"
READ - GET "/api/contact"
UPDATE - PUT "/api/contact/:id"
DELETE - DELETE "/api/contact/:id"
*/

// Contact object
/*
    id: number,
    firstname: string,
    lastname: string,
    email:string,
    phone:string
*/

// READ all
app.get("/api/contact", function(req, res) {
    return res.status(200).json(database);
})

// CREATE contact
app.post("/api/contact", function(req, res) {
    // This is a Javascript object (because we use Javascript "database" in this app)
    let contact = {
        id:id,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone
    }
    id++; // emulate autoincrement
    database.push(contact);
    return res.status(201).json({"message":"Created"});
})

// DELETE contact
app.delete("/api/contact/:id", function(req, res) {
    let tempId = parseInt(req.params.id, 10);
    // after filtering, database contains all contacts which DON'T match id
    database = database.filter(contact => contact.id !== tempId);
    return res.status(200).json({"message":"Success"});
})

// UPDATE contact
app.put("/api/contact/:id", function(req, res) {
    let tempId = parseInt(req.params.id, 10);
    let contact = {
        id:tempId,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone
    }
    for (let i=0; i<database.length; i++) {
        if (tempId === database[i].id) {
            database.splice(i, 1, contact);
            return res.status(200).json({"message":"Success"});
        }
    }
    return res.status(404).json({"message":"Not found"});
})

app.listen(3000);
console.log("Running in port 3000");