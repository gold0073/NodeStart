const express = require("express");
const hbs = require("express-handlebars");
const server = express();

server.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
  })
);
server.set("view engine", "hbs");
//template Engine
server.use(express.static(__dirname + "/public"));
server.use(function(req, res, next) {
  //config
  next();
});

server.get("/", function(req, res) {
  res.render("index", {
    name: "AAA",
    home: true
  });
});

server.get("/features", function(req, res){
  res.render("features", {
    features: true
  });
});

server.get("/contact", function(req, res) {
  res.render("contact", {
    contact: true,
    list: ["Danny", "Jenny", "Man", "Boy"]
  });
});

server.listen(8080, () => {
  console.log("The server is running on Port 8080");
});