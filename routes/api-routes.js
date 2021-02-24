// Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  // GET route for getting all of the dates
  app.get("/api/Dates", (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Dates.findAll({}).then((response) => res.json(response));
  });

  // POST route for saving a new dates
  app.post("/api/Dates", (req, res) => {
    db.Dates.create({
      name: req.body.text,
      complete: req.body.complete,
    }).then((dbDate) => res.json(dbDate));
  });

  // DELETE route for deleting dates using the ID (req.params.id)
  app.delete("/api/Dates/:id", (req, res) => {
    // We just have to specify which todo we want to destroy with "where"
    db.Dates.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      db.Dates.findAll({}).then((result) => {
        res.json(result);
      });
    });
  });

  // PUT route for updating date entries. We can get the updated date data from req.body
  app.put("/api/Dates", (req, res) => {
    db.Date.update(
      {
        text: req.body.text,
        complete: req.body.complete,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    ).then((dbDate) => res.json(dbDate));
  });
};
