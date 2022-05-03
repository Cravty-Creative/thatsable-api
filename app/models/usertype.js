"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserType.init(
    {
      ut_name: DataTypes.STRING,
      ut_desc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserType",
    }
  );
  UserType.associate = function (models) {
    UserType.hasMany(models.User, { foreignKey: "ut_id", as: "user" });
  };
  return UserType;
};
