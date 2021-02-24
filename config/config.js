require("dotenv").config();

module.exports = {
  development: {
    username: "admin",
    password: "password",
    database: "date_db",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: "admin",
    password: "password",
    database: "date_db",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  },
};
