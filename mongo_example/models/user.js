var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: String,
  passwordDigest: String
});

var User = mongoose.model("User", userSchema);

module.exports = User;
