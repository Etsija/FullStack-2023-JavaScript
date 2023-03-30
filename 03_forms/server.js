// This is the back-end

const express = require("express");

// Initialise Express
let app = express();

// Interpret JSON objects
app.use(express.json());

// Address "/" refers to index.html, "/public" refers to hard drive
app.use("/", express.static("public"));

// Handle login request and send response
app.post("/login", function(req, res) {
    //console.log(req);
    let user = {
        "username":req.body.username,
        "password":req.body.password
    }
    console.log("User", user);
    if (user.username === "admin" && user.password === "adminadmin")  {
        return res.status(200).json({"message":"logged in"});
    } else {
        return res.status(401).json({"message":"unauthorized"});
    }
})
app.listen(3000);
console.log("Running in port 3000");