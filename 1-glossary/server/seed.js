const {Word, Newword} = require("./db.js");

const saveNewWord = function(data) {
  const newWord = new Newword(data);
  return newWord.save();
}

const getAllWords = function() {
  return Word.find({});
}

const getNewWords = function() {
  return Newword.find({});
}

const getUpdateDefinition = async function(word, data) {
  const filter = {"word": word};
  const update = {"definition": data}
  return await Newword.findOneAndUpdate(filter, update, {
    returnOriginal: false,
    rawResult: true
  })
  .exec()
}

const searchWord = function(data) {
  const filter = {word: data};
  return Newword.findOne(filter);
   
}

const deleteWord = function(id) {
  
  return Newword.deleteOne({_id: id});
}

module.exports = {getAllWords, getNewWords, saveNewWord, getUpdateDefinition, deleteWord, searchWord};