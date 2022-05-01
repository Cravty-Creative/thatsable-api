"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teacher.init(
    {
      tac_st_id: DataTypes.INTEGER,
      tac_email: DataTypes.STRING,
      tac_password: DataTypes.STRING,
      tac_access_token: DataTypes.STRING,
      tac_online_status: DataTypes.BOOLEAN,
      tac_last_online: DataTypes.DATE,
      tac_last_login: DataTypes.DATE,
      email_verified_at: DataTypes.DATE,
      tac_status: DataTypes.BOOLEAN,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
      deletedBy: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Teacher",
    }
  );
  Teacher.associate = function (models) {
    // Relation ke data EducationStage
    Teacher.belongsTo(models.EducationStage, {
      foreignKey: "tac_st_id",
      as: "educationStage",
    });
    // Relation ke data TeacherDetail
    Teacher.hasOne(models.TeacherDetail, {
      foreignKey: "tdt_tac_id",
      as: "detail",
    });
  };
  return Teacher;
};
