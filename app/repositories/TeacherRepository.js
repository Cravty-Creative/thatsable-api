const { User, TeacherDetail, sequelize } = require("../models");

/**
 * @class TeacherRepository.js
 * @author Rizky Adji Pangestu
 */
class TeacherRepository {
  static async create(teacher, detail) {
    const transaction = await sequelize.transaction();
    console.log("Start Teacher Transaction ...");
    try {
      const result = await User.create(teacher, { transaction });
      await TeacherDetail.create(detail, { transaction });
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
        ut_id: 1, // teacher
        status: true,
      },
    });
  }
  static read(id) {
    return User.findOne({
      where: {
        id: id,
        ut_id: 1, // teacher
        status: true,
      },
    });
  }
  static update(id, data) {
    return User.update(data, {
      where: {
        id: id,
        ut_id: 1, // teacher
        status: true,
      },
    });
  }
}

module.exports = TeacherRepository;
