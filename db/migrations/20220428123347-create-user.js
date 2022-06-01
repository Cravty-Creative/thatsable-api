"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      st_id: {
        type: Sequelize.INTEGER,
        references: { model: "EducationStages", key: "id" },
      },
      ut_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "UserTypes", key: "id" },
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      access_token: {
        type: Sequelize.STRING,
      },
      online_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      last_online: {
        type: Sequelize.DATE,
      },
      last_login: {
        type: Sequelize.DATE,
      },
      email_verified_at: {
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      deletedBy: {
        type: Sequelize.STRING,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
