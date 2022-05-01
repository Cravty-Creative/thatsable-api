"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Teachers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tac_st_id: {
        type: Sequelize.INTEGER,
      },
      tac_email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tac_password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tac_access_token: {
        type: Sequelize.STRING,
      },
      tac_online_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      tac_last_online: {
        type: Sequelize.DATE,
      },
      tac_last_login: {
        type: Sequelize.DATE,
      },
      email_verified_at: {
        type: Sequelize.DATE,
      },
      tac_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedBy: {
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
    await queryInterface.dropTable("Teachers");
  },
};

