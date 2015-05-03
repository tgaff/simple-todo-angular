
var express = require("express"),
  app = express();
  path = require("path");
  fs = require("fs");
  _ = require("underscore");


var embolden = function(some_str) {
  return "<h1>" + some_str + "</h1>";
};

app.get("/add/:x/:y", function (req, res) {
  var x = parseInt(req.params.x, 10); //get x from the route
  var y = parseInt(req.params.y, 10); //get y from the route
  res.send(200, embolden(x+y));
});

app.get("/multiply/:x/:y", function(req, res) {
  var x = parseInt(req.params.x, 10);
  var y = parseInt(req.params.y, 10);
  res.send(200, embolden(x*y));
});

app.get("/greet", function (req, res) {
  // unlike rails the query params aren't in the response object
  var name = req.query.name;
  res.send(200, "Hello " + embolden(name));
});









app.engine("html", function () {
  var args = Array.prototype.slice.call(arguments);
  var path = args.shift(); // off the beginning
              //data      // there's also some optional middle param
  var cb = args.pop();  //off the end
  var file = fs.readFileSync(path).toString();  //buffering, we pull whole file in
  console.log("u used the engine to do some renderings");
  var data = args.shift();
  // turn file into a template
  console.log(_.template(file));
  cb(null, _.template(file)(data) ); //_.template(file) must return a function
});


// views example
app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname, "views", "index.html"));
  //res.sendHTML("index.html"); //before implement engine, with middleware
  res.render("index.html", {name: "ze vurld"});
});




// middleware example
app.use(function(req,res,next) {
  console.log("Running (middlewares)");
  res.sendOps = {};
  res.sendOps.root = path.join(__dirname, "views");
  res.sendHTML = function(fname) {
    res.sendFile(fname, res.sendOps);

  }

  next();
});























app.listen(3000, function() {
  console.log("RUNNiNG ON 3000!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});
