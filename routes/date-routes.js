const db = require("../models");

module.exports = (app) => {
  app.get("/home", (req, res) => {
    console.log("ok!");
    res.render("index");
  });

  app.post("/api/add", async (req, res) => {
    console.log(req.body);

    //console.log(req.body.name, req.body.body);

    const create = await db.Date.create({
      name: req.body.location,
      rating: req.body.rating,
    });

    const results = await db.Date.findAll({
      where: {
        name: req.body.location,
      },
    });

    //res.render("handlebars-page", results);
    res.json(results);
  });
};
