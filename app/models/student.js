"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init(
    {
      sac_st_id: DataTypes.INTEGER,
      sac_email: DataTypes.STRING,
      sac_password: DataTypes.STRING,
      sac_access_token: DataTypes.STRING,
      sac_online_status: DataTypes.BOOLEAN,
      sac_last_online: DataTypes.DATE,
      sac_last_login: DataTypes.DATE,
      email_verified_at: DataTypes.DATE,
      sac_status: DataTypes.BOOLEAN,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
      deletedBy: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  Student.associate = function (models) {
    // Relation ke data EducationStage
    Student.belongsTo(models.EducationStage, {
      foreignKey: "sac_st_id",
      as: "educationStage",
    });
    // Relation ke data StudentDetail
    Student.hasOne(models.StudentDetail, {
      foreignKey: "sdt_sac_id",
      as: "studentDetail",
    });
  };
  return Student;
};
