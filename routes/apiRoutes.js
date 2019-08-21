var db = require("../models");

module.exports = function(app) {
  app.get("/api/enemies/", function(req, res) {
    // var query = {};
    // if (req.params.id) {
    //   query = req.params.id;
    // } else {
    //   console.log("default is one");
    //   query = 1;
    // }
    // console.log(req.params)
    db.Enemies.findAll({}).then(function(req) {
      res.json(req);
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
};
