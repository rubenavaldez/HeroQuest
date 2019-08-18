var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/enemies/:id", function(req, res) {
    var query = {};
    if (req.params.id) {
      query = req.params.id;
    } else {
      console.log("default is one");
      query = 1;
    }
    console.log(req.params)
    db.Enemies.findOne({
      where: {
        id: query
      }
    }).then(function(response,err) {
      console.log(response);
      // res.json(response);
      // console.log(res.json(dbEnemies));
      // res.redirect("../../game");
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // app.get("/api/enemies/:id", function(req, res) {
  //   db.Enemies.findAll({}).then(function() {
  //     // res.json(dbEnemies);
  //     // res.redirect("../../game");
  //   });
  // });

  app.get("/api/enemies", function(req, res) {
    db.Enemies.findAll({}).then(function() {
      res.json(dbEnemies);
      // res.redirect("../../game");
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
