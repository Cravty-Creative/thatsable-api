/**
 * @file MySql Configuration file
 * @author Rizky Adji Pangestu
 */

require("dotenv").config();

/** Destruct object from .env */
const {
  DB_USERNAME = "kllbhmat",
  DB_PASSWORD = "KGmbLyt8TanilZMvOoNtlTss3E33rANo",
  DB_HOST = "satao.db.elephantsql.com",
  DB_NAME = "kllbhmat",
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`, //_development`,
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`, //_test`,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`, //_production`,
    host: DB_HOST,
    dialect: "postgres",
  },
};
