const express = require("express");

// Initialise Express
let app = express();

// Address "/" refers to index.html, "/public" refers to hard drive
app.use("/", express.static("public"));
app.listen(3000);
console.log("Running in port 3000");