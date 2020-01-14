

//express connection
const fs = require("fs");
const express = require("express");
const path = require("path");

//set up server
const app = express();
//PORT
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


//read db.json

//get title and note


//views
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})
app.get("/api/notes", function(req,res){
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

//get response from /NOTES
app.get("/notes", function(req,res){
     
})
//display notes
//add notes
//start server
app.listen(PORT, function(){
    console.log("listening on port:" + PORT)
})