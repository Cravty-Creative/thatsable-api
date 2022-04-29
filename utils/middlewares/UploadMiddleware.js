/**
 * @file middleware uploadMiddleware.js
 * @author Rizky Adji Pangestu
 */

const multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

module.exports = upload;
