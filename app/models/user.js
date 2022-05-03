"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      st_id: DataTypes.INTEGER,
      ut_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      access_token: DataTypes.STRING,
      online_status: DataTypes.BOOLEAN,
      last_online: DataTypes.DATE,
      last_login: DataTypes.DATE,
      email_verified_at: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
      deletedBy: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.associate = function (models) {
    // Relation ke data UserType
    User.belongsTo(models.UserType, {
      foreignKey: "ut_id",
      as: "usertype",
    });
    // Relation ke data StudentDetail
    User.hasMany(models.StudentDetail, {
      foreignKey: "sdt_user_id",
      as: "studentdetail",
    });
    // Relation ke data TeacherDetail
    User.hasMany(models.TeacherDetail, {
      foreignKey: "tdt_user_id",
      as: "teacherdetail",
    });
  };
  return User;
};
