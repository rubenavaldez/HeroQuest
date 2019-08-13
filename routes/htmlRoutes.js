var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load charcter select
  app.get("/party/:id", function(req, res) {
    console.log("party id");
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("party", {
        msg: "Choose your party",
        examples: dbExamples
      });
    });
  });

  app.get("/party", function(req, res) {
    console.log("party");
    res.render("party", {});
  });

  // Render 404 page for any unmatched routes
  //must be last in the code 
  app.get("*", function(req, res) {
    res.render("404");
  });
};
