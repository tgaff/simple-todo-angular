var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  _user_id: mongoose.Schema.Types.ObjectId,
  author: String
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;
