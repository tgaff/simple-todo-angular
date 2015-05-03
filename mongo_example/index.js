var express = require("express"),
  app=express(),
  bodyParser = require("body-parser"),
  //mongoose = require("mongoose");
  db = require("./models");

// extended: true - turns
//    user[email] = blah
//  into
//    { user: {email: "blah"} }
app.use(bodyParser.urlencoded({extended: true}) );

/*
mongoose.connect("mongodb://localhost/book_app");


var userSchema = new mongoose.Schema({
  email: String,
  passwordDigest: String
});

var User = mongoose.model("User", userSchema);
*/

//handle posting user data
app.post("/users", function(req, res) {
  var userParams = req.body.user;
  db.User.create(userParams, function(err, user) {
    res.send(user);
  })
});

app.post("/users/:id/books", function(req, res) {
  var bookParams = req.body.book;
  bookParams._user_id = req.params.id;

  db.Book.create(bookParams, function(err, book) {
    res.send(201, book);
  });
});

app.get("/users/:id", function(req,res) {
  //var userParams = req.body.user;
  var user_id = req.params.id;
  db.User.find( {_id: user_id}, function(err,user) {
    res.send(200, user);
  })
});

app.get("/dump", function(req, res) {
  var users;
});

app.listen(3000);
