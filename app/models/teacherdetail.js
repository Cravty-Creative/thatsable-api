'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeacherDetail.init({
    tdt_tac_id: DataTypes.INTEGER,
    tdt_fullname: DataTypes.STRING,
    tdt_age: DataTypes.INTEGER,
    tdt_gender: DataTypes.STRING,
    tdt_contact: DataTypes.STRING,
    tdt_photo_filename: DataTypes.STRING,
    tdt_photo_filepath: DataTypes.STRING,
    tdt_date_joined: DataTypes.DATE,
    tdt_birthdate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TeacherDetail',
  });
  return TeacherDetail;
};