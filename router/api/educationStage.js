/**
 * @file router educationStage.js
 * @author Rizky Adji Pangestu
 */

const router = require("express").Router();
const EducationStageController = require("../../app/controllers/api/EducationStageController");

// REST API ROUTES

/**
 * @swagger
 * /api/educationStage:
 *   get:
 *     summary: get All educationStage data
 *     description: Retrieve educationType data from database
 *     responses:
 *      '200':
 *         description: Get All data from educationTypes
 *      '500':
 *        description: Internal Server Error
 */
router.get("/", EducationStageController.getAll);

/**
 * @swagger
 * /api/educationStage/{id}:
 *   get:
 *     summary: get educationStage data by id
 *     description: Retrieve educationType data from database by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: educationStage id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *      '200':
 *         description: Get educationStage data by id
 *      '500':
 *         description: Internal Server Error
 *      '404':
 *         description: Not Found
 */
router.get("/:id", EducationStageController.getById);

module.exports = router;
