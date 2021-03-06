"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EducationStage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EducationStage.init(
    {
      st_name: DataTypes.STRING,
      st_desc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EducationStage",
    }
  );
  EducationStage.associate = function (models) {
    // Relation ke data User
    EducationStage.hasMany(models.User, {
      foreignKey: "st_id",
      as: "user",
    });
  };
  return EducationStage;
};
