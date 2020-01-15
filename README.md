# Note-Taker
Express Note Taker App for Berkeley Bootcamp reading, adding, and deleting data from Express Server.
# Deployed Link
[Note Taker App](https://sleepy-castle-17394.herokuapp.com/)


# Preview

![Alt text](./public/assets/images/NoteGif.gif?raw=true "Preview Gif")

# Prerequisites
* [NodeJS](https://nodejs.org/en/)

# Technologies
* HTML
* CSS
* Javascript
* [NodeJS](https://nodejs.org/en/)
    * [Express](https://expressjs.com/)

# Installing 

```git
git clone https://github.com/skuttenkuler/Note-Taker.git
```
```bash
cd Note-Taker
npm install
```

    
# Code Snippets
    - creating a new Note and pushing to JSON array


```javascript
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
```

 - deleting selected note from list and .filter() new array


 ```javascript
 //delete note
app.delete("/api/notes/:id", function(req,res){
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf-8", function(err){
        if (err) throw err;
        let db = JSON.parse(data);
        var noteID = parseInt(req.params.id);
        console.log(db);
        console.log(noteID);
        //return new arr with items that were selected
        var newDB = db.filter(num => num.id != noteID);
                 
    


        console.log("________________________")
        console.log(newDB)
        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newDB), function(err){
            if (err) throw err;
            console.log("note deleted");
            
        })
    })
});
 ```




    

# Authors
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)