const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;
const dateTest = require("./models");
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//const routes = require("./controllers/dateController.js");
// require(`./routes/api-routes.js`)(app);
//app.use("/music" , routes);
// app.use(routes);

const htmlRouter = require("./routes/date-routes");
const db = require("./models");
htmlRouter(app);

const force =  true;

db.sequelize.sync({ force }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

// Start our server so that it can begin listening to client requests.
//dateTest.sequelize.sync().then(() => {
 // app.listen(PORT, () => {
//    console.log(`Server listening on: http://localhost:${PORT}`);
//  });
//});
