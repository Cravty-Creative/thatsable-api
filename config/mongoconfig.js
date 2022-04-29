/**
 * @file MongoDB Configuration file
 * @author Rizky Adji Pangestu
 */

require("dotenv").config();

const mongoose = require("mongoose");

/** Destruct object from .env */
const {
  MONGODB_USERNAME = "root",
  MONGODB_PASSWORD = "kHHQK67ybRbwMsZV",
  MONGODB_HOST = "dblearning.erp5b.mongodb.net",
  MONGODB_COURSE_NAME = "dbcourse",
  MONGODB_TASK_NAME = "dbtask",
} = process.env;

const courseUri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_COURSE_NAME}?retryWrites=true&w=majority`;
const taskUri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_TASK_NAME}?retryWrites=true&w=majority`;

module.exports = {
  connectDbCourse: function () {
    mongoose
      .connect(courseUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB Course");
      })
      .catch((err) => {
        console.error(err);
      });
  },
  connectDbTask: function () {
    mongoose
      .connect(taskUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB Task");
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
