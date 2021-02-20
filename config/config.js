require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "date_db",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "root",
    database: "date_db",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  },
};
