const EducationStageRepository = require("../repositories/EducationStageRepository");

/**
 * @class EducationStageService.js
 * @author Rizky Adji Pangestu
 */
class EducationStageService {
  static getAll() {
    return EducationStageRepository.findAll();
  }
  static get(id) {
    return EducationStageRepository.findOne(id);
  }
}

module.exports = EducationStageService;
