const { Student, StudentDetail, sequelize } = require("../models");

/**
 * @class StudentRepository.js
 * @author Rizky Adji Pangestu
 */
class StudentRepository {
  static async create(student, detail) {
    const transaction = await sequelize.transaction();
    console.log("Start Student Transaction ...");
    try {
      const result = await Student.create(student, { transaction });
      await StudentDetail.create(detail, { transaction });
      await transaction.commit();
      console.log("Transaction commited");
      return {
        status: true,
        code: 200,
        data: result,
      };
    } catch (error) {
      await transaction.rollback();
      console.log("Transaction rollbacked");
      throw error;
    }
  }
  static checkEmail(email) {
    return Student.findOne({
      where: {
        sac_email: email,
        sac_status: true,
      },
    });
  }
  static read(id) {
    return Student.findOne({
      where: {
        id: id,
        sac_status: true,
      },
    });
  }
  static update(id, data) {
    return Student.update(data, {
      where: {
        id: id,
        sac_status: true,
      },
    });
  }
}

module.exports = StudentRepository;
