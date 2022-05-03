"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudentDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentDetail.init(
    {
      sdt_sac_id: DataTypes.INTEGER,
      sdt_fullname: DataTypes.STRING,
      sdt_age: DataTypes.INTEGER,
      sdt_gender: DataTypes.STRING,
      sdt_class: DataTypes.STRING,
      sdt_contact: DataTypes.STRING,
      sdt_parent_contact: DataTypes.STRING,
      sdt_photo_filename: DataTypes.STRING,
      sdt_photo_filepath: DataTypes.STRING,
      sdt_date_joined: DataTypes.DATE,
      sdt_birthdate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "StudentDetail",
    }
  );
  StudentDetail.associate = function (models) {
    // Relation ke data Student
    StudentDetail.belongsTo(models.Student, {
      foreignKey: "sdt_sac_id",
      as: "student",
    });
  };
  return StudentDetail;
};
