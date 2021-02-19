const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;
const dateTest = require("./models");
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//const routes = require("./routes");

require("./routes/api.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// app.use(routes);
// Start our server so that it can begin listening to client requests.
dateTest.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
