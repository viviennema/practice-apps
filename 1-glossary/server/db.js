require("dotenv").config();
const mongoose = require("mongoose");
console.log('name', process.env.DB_NAME);
mongoose.connect('mongodb://localhost:27017/glossary')
.catch((error) => handleError(error));

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
const wordSchema = mongoose.Schema({
  word: String,
  definition: String
});

const newWordSchema = mongoose.Schema({
  word: String,
  definition: String
})

let Word = mongoose.model('Word', wordSchema);

let Newword = mongoose.model('NewWord', newWordSchema);



module.exports = {Word, Newword};
