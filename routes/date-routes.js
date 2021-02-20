const db = require("../models");

module.exports = (app) => {
  app.get("/home", (req, res) => {
    console.log("ok!");
    res.render("index");
  });

  app.post("/api/add", async (req, res) => {
    console.log(req.body);

    db.Date.create(req.body);

    const results = await db.Date.findAll({
      where: {
        location: req.body.location,
      },
    });

    res.render("handlebars-page", results);
    res.send("a work in progress");
  });
};
