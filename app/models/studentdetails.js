"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudentDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentDetails.init(
    {
      sdt_sac_id: DataTypes.INTEGER,
      sdt_fullname: DataTypes.STRING,
      sdt_age: DataTypes.INTEGER,
      sdt_gender: DataTypes.STRING,
      sdt_edu: DataTypes.STRING,
      sdt_class: DataTypes.STRING,
      sdt_contact: DataTypes.STRING,
      sdt_parent_contact: DataTypes.STRING,
      sdt_photofilename: DataTypes.STRING,
      sdt_photo: DataTypes.BLOB,
      sdt_date_joined: DataTypes.DATE,
      sdt_birthdate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "StudentDetails",
    }
  );
  return StudentDetails;
};
