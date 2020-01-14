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
app.use(express.static(__dirname));



//views
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

//display notes
//add notes
//start server
app.listen(PORT, function(){
    console.log("listening on port:" + PORT)
})