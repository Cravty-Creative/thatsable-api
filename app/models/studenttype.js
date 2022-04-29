'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentType.init({
    st_name: DataTypes.STRING,
    st_desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentType',
  });
  return StudentType;
};