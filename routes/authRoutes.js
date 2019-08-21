module.exports = (router, passport, validate) => {
    router.route("/login").post((req, res, next) => {
      passport.authenticate("local-login", function(err, user, info) {
        if (err) {
          return res.status(400).send({ error: err });
        }
        if (!user) {
          return res.status(422).send({ error: info.message });
        }
        req.logIn(user, function(err) {
          if (err) {
            return res.status(400).send({ error: err });
          }
          return res.redirect("/index");
        });
      })(req, res, next);
    });
  
    router.route("/logout").get((req, res) => {
      req.logout();
      res.redirect("/");
    });
  
    router.route("/register").post((req, res, next) => {
      const first_name = req.body.first_name ? req.body.first_name.trim() : "";
      const last_name = req.body.last_name ? req.body.last_name.trim() : "";
      const email = req.body.email ? req.body.email.trim() : "";
      const password = req.body.password ? req.body.password.trim() : "";
      
      if (!email || !password || !first_name || !last_name) {
        return res.status(422).send({ error: "All fields are required." });
      }
  
      if (!validate.name(first_name)) {
        return res.status(422).send({
          error: "Invalid first name."
        });
      }
  
      if (!validate.name(last_name)) {
        return res.status(422).send({
          error: "Invalid last name."
        });
      }
  
      if (!validate.email(email)) {
        return res.status(422).send({
          error: "Invalid email format."
        });
      }
  
      if (!validate.password(password)) {
        return res.status(422).send({
          error:
            "Password must contain at least one number, one uppercase & one lowercase letter, one of the following \"!#@$%&?\", and be at least 8 characters."
        });
      }
  
      passport.authenticate("local-register", function(err, user, info) {
        if (err) {
          return res.status(400).send({ error: err });
        }
        if (!user) {
          return res.status(422).send({ error: info.message });
        }
        req.logIn(user, function(err) {
          if (err) {
            return res.status(400).send({ error: err });
          }
          return res.redirect("/index");
        });
      })(req, res, next);
    });
  };
  