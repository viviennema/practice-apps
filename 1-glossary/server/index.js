require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const {getAllWords, getNewWords, saveNewWord, getUpdateDefinition, deleteWord, searchWord} = require('./seed.js');

app.use('/', express.static(path.join(__dirname, "../client/dist" )));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/words', (req, res) => {
  getAllWords()
  .then(data => {
    res.send(data);
  })
});

app.post('/newwords', (req, res) => {
  let newWord = {
    word: req.body.word,
    definition: req.body.definition
  }
  console.log(newWord);
  saveNewWord(newWord)
    .then((response) => {
      res.send(response.data);
    })
});

app.get('/newwords', (req, res) => {
  getNewWords()
  .then(data => {
    res.send(data);
  })
});

app.get('/search', (req, res) => {
  console.log('search',req)
  var word = req.body.data;
  searchWord(word)
  .then(data => {
    console.log('data', data);
    res.send(data);
  })
})

app.put('/newwords', (req, res) => {
  let updateWord = req.body.word;
  let updateDefinition = req.body.definition
  console.log(req.body);
  getUpdateDefinition(updateWord, updateDefinition)
  .then(() => {
    console.log('Updated!')
    res.send("Updated!")
  })
})

app.delete('/newwords', (req, res) => {
  let deletedId = req.body.id;
  deleteWord(deletedId)
   .then(() => {
    console.log('Word deleted!');
    res.send("deleted!");
   })
})


app.listen(process.env.PORT, function(){
  console.log('listening on port');
})

