const { EducationStage } = require("../models");

/**
 * @class EducationStageRepository.js
 * @author Rizky Adji Pangestu
 */
class EducationStageRepository {
  static findAll() {
    return EducationStage.findAll();
  }
  static findOne(id) {
    return EducationStage.findByPk(id);
  }
}

module.exports = EducationStageRepository;
