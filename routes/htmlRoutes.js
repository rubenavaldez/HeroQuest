var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Characters.findAll({}).then(function(dbCharacters) {
      res.render("index", {
        msg: "Welcome!",
        Characters: dbCharacters
      });
    });
  });

  // Load Characters page and pass in an Characters by id
  app.get("/Characters/:id", function(req, res) {
    db.Characters.findOne({ where: { id: req.params.id } }).then(function(dbCharacters) {
      res.render("Characters", {
        Characters: dbCharacters
      });
    });
  });

  // Load charcter select
  app.get("/party/:id", function(req, res) {
    console.log("party id");
    db.Characters.findAll({}).then(function(dbCharacters) {
      res.render("party", {
        msg: "Choose your party",
        Characters: dbCharacters
      });
    });
  });

  app.get("/party", function(req, res) {
    console.log("party");
    res.render("party", {});
  });

  app.get("/game", function(req, res) {
    console.log("game");
    res.render("game", {});
  });
  app.get("/campaign", function(req, res) {
    console.log("campaign");
    res.render("campaign", {});
  });

  // Render 404 page for any unmatched routes
  //must be last in the code 
  app.get("*", function(req, res) {
    res.render("404");
  });
};
