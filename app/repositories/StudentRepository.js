const { User, StudentDetail, sequelize } = require("../models");

/**
 * @class StudentRepository.js
 * @author Rizky Adji Pangestu
 */
class StudentRepository {
  static async create(student, detail) {
    const transaction = await sequelize.transaction();
    console.log("Start Student Transaction ...");
    try {
      const result = await User.create(student, { transaction });
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
    return User.findOne({
      where: {
        email: email,
        ut_id: 2, // student
        status: true,
      },
    });
  }
  static read(id) {
    return User.findOne({
      where: {
        id: id,
        ut_id: 2, // student
        status: true,
      },
    });
  }
  static update(id, data) {
    return User.update(data, {
      where: {
        id: id,
        ut_id: 2, // student
        status: true,
      },
    });
  }
}

module.exports = StudentRepository;
