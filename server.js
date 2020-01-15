

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
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.get("/api/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/db/db.json"));
})

app.post("/api/notes", function(req, res){
    let newNote = req.body;
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf-8", function(err, data){
        if (err) throw err;
        let db = JSON.parse(data);
        db.push(newNote);
        var idNum = 0
        //key
        for(i = 0; i < db.length; i++){
            db[i].id = idNum ++;
        }
        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(db), function(err){
            if (err) throw err;
            console.log("note added");
        });
    })
});

//delete note
app.delete("/api/notes/:id", function(req,res){
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf-8", function(err, data){
        if (err) throw err;
        let db = JSON.parse(data);
        var noteID = req.param.id;
        for(i = 0; i < db.length; i++){
            if(db[i].id === noteID){
                 delete db[i];
            }
        }
        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(db), function(err){
            if (err) throw err;
            console.log("note deleted");
        })
    })
});
//start server
app.listen(PORT, function(){
    console.log("listening on port:" + PORT)
})