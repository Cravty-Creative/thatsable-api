"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sac_st_id: {
        type: Sequelize.INTEGER,
      },
      sac_email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sac_password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sac_access_token: {
        type: Sequelize.STRING,
      },
      sac_online_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      sac_last_online: {
        type: Sequelize.DATE,
      },
      sac_last_login: {
        type: Sequelize.DATE,
      },
      email_verified_at: {
        type: Sequelize.DATE,
      },
      sac_status: {
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
    await queryInterface.dropTable("Students");
  },
};

