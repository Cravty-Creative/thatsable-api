/**
 * @file router studentAuth.js
 * @author Rizky Adji Pangestu
 */

const router = require("express").Router();
const StudentAuthController = require("../../app/controllers/auth/StudentAuthController");

// REST API ROUTES

/**
 * @swagger
 * /auth/student/register:
 *   post:
 *     summary: register student
 *     description: Retrieve educationType data from database by id
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: student
 *         description: Student data for account
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
router.post("/register", StudentAuthController.register);

/**
 * @swagger
 * /auth/student/login:
 *   post:
 *     summary: login student
 *     description: login student
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: student
 *         description: Student data for account
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
router.post("/login", StudentAuthController.login);

/**
 * @swagger
 * /auth/student/logout:
 *   get:
 *     summary: logout student
 *     description: logout student
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Student id
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
  StudentAuthController.Authorization,
  StudentAuthController.logout
);

module.exports = router;
