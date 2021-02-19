const db = require("../models");

model.exports = (app) => {

app.get("/home", (req, res) => {

    console.log("ok!");
    res.render("index");

});

app.post("/api/add", (req, res) => {

    console.log(req.body);

    db.Date.create(req.body);

    const results = await db.Date.find();
    
    res.render("handlebars-page", results);
    res.send("a work in progress");
});

}