// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Date" model that matches up with DB
const Date = sequelize.define("date", {
  weather: Sequelize.STRING,
  restuarant: Sequelize.STRING,
  food: Sequelize.STRING,
  movie: Sequelize.STRING,
  music: Sequelize.STRING,
  movieTime: Sequelize.STRING,
});

// Syncs with DB
Date.sync();

// Makes the Date Model available for other files (will also create a table)
module.exports = Date;
