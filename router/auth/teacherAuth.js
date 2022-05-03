/**
 * @file router teacherAuth.js
 * @author Rizky Adji Pangestu
 */

const router = require("express").Router();
const TeacherAuthController = require("../../app/controllers/auth/TeacherAuthController");

// REST API ROUTES

/**
 * @swagger
 * /auth/teacher/register:
 *   post:
 *     summary: register teacher
 *     description: Retrieve educationType data from database by id
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: teacher
 *         description: teacher data for account
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *             - fullname
 *             - phone
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             fullname:
 *               type: string
 *             phone:
 *               type: string
 *     responses:
 *      '200':
 *         description: Successfully Created
 *      '500':
 *         description: Internal Server Error
 *      '400':
 *         description: Bad Request
 */
router.post("/register", TeacherAuthController.register);

/**
 * @swagger
 * /auth/teacher/login:
 *   post:
 *     summary: login teacher
 *     description: login teacher
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: teacher
 *         description: teacher data for account
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *      '200':
 *         description: Successfully Login
 *      '500':
 *         description: Internal Server Error
 *      '400':
 *         description: Email or Password is incorrect
 */
router.post("/login", TeacherAuthController.login);

/**
 * @swagger
 * /auth/teacher/logout:
 *   get:
 *     summary: logout teacher
 *     description: logout teacher
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: teacher id
 *         schema:
 *           type: integer
 *       - name: auth
 *         in: header
 *         description: an authorization header
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *      '200':
 *         description: Successfully Logout
 *      '500':
 *         description: Internal Server Error
 *      '404':
 *         description: Student not found
 */
router.get(
  "/logout/:id",
  TeacherAuthController.Authorization,
  TeacherAuthController.logout
);

module.exports = router;
