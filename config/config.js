require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "Today2021!$",
    database: "date_DB",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: "admin",
    password: "Today2021!$",
    database: "date_DB",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  },
};
