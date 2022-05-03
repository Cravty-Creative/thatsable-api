const StudentService = require("../../services/StudentService");

/**
 * @class StudentController.js
 * @author Rizky Adji Pangestu
 */
class StudentController {
  static getById(req, res) {
    StudentService.getById(req.params.id)
      .then((result) => {
        if (!result) {
          res.status(404).json({
            code: 404,
            message: "Student not found",
          });
        } else {
          res.status(200).json({
            code: 200,
            message: "Successfully get student",
            data: result,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          code: 500,
          message: "Internal Server Error",
        });
      });
  }
}

module.exports = StudentController;
