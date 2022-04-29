/**
 * @file MySql Configuration file
 * @author Rizky Adji Pangestu
 */

require("dotenv").config();

/** Destruct object from .env */
const {
  DB_USERNAME = "root",
  DB_PASSWORD = "",
  DB_HOST = "127.0.0.1",
  DB_NAME = "dbuseraccount",
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    dialect: "mysql",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    dialect: "mysql",
  },
};
