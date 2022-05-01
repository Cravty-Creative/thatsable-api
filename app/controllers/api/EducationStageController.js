const EducationStageService = require("../../services/EducationStageService");

/**
 * @class EducationStageController.js
 * @author Rizky Adji Pangestu
 */
class EducationStageController {
  static getAll(req, res) {
    EducationStageService.getAll()
      .then((educationStages) => {
        res.status(200).json({
          code: 200,
          message: "OK",
          data: educationStages,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          code: 500,
          message: "Internal Server Error",
        });
      });
  }
  static getById(req, res) {
    EducationStageService.get(req.params.id)
      .then((educationStage) => {
        if (!educationStage) {
          res.status(404).json({
            code: 404,
            message: "Not Found",
          });
        } else {
          res.status(200).json({
            code: 200,
            message: "OK",
            data: educationStage,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          code: 500,
          message: "Internal Server Error",
        });
      });
  }
}

module.exports = EducationStageController;
