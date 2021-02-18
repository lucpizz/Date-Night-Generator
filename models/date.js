module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Date", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      len: [1],
    },
  });
};

/*
// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
const sequelize = require("../config/config.js");

// Creates a "Date" model that matches up with DB
const Date = sequelize.define("date", {
  weather: Sequelize.STRING,
  restuarant: Sequelize.STRING,
  food: Sequelize.STRING,
  movie: Sequelize.STRING,
  music: Sequelize.STRING,
  movieTime: Sequelize.STRING,
});

// Makes the Date Model available for other files (will also create a table)
module.exports = Date;
*/
