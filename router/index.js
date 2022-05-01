/**
 * @file router (API routes) index.js
 * @author Rizky Adji Pangestu
 */

const router = require("express").Router();

// Public Routes
// router.use("/auth/teacher", require("./auth/teacherAuth"));
// router.use("/auth/student", require("./auth/studentAuth"));
router.use("/api/educationStage", require("./api/educationStage"));
// Authorized Routes
// router.use("/api/course", require("./api/course"));
// router.use("/api/student", require("./api/student"));
// router.use("/api/teacher", require("./api/teacher"));
// router.use("/api/exam", require("./api/exam"));
// router.use("/api/task", require("./api/task"));
// router.use("/api/studentCourse", require("./api/studentCourse"));
// router.use("/api/studentExam", require("./api/studentExam"));
// router.use("/api/studentTask", require("./api/studentTask"));
// End route

module.exports = router;
