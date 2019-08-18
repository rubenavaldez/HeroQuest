var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/enemies", function(req, res) {
    db.Enemies.findAll({}).then(function(dbEnemies) {
      // res.json(dbEnemies);
      // console.log(res.json(dbEnemies));
      res.redirect("../../game");
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/enemies", function(req, res) {
    db.Enemies.findAll({}).then(function() {
      // res.json(dbPlayers);
      res.redirect("../../game");
    });
  });

  app.post("/api/recruit/:id", function(req, res) {
    console.log(req.body);
    db.Players.create({
      CharacterId: req.params.id
    }).then(function(dbPlayers) {
      // res.json(dbPlayers);
      res.redirect("../../campaign");
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
