"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("StudentDetails", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sdt_sac_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      sdt_fullname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sdt_age: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      sdt_gender: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      sdt_class: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      sdt_contact: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      sdt_parent_contact: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      sdt_photo_filename: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      sdt_photo_filepath: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      sdt_date_joined: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      sdt_birthdate: {
        allowNull: true,
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
    await queryInterface.dropTable("StudentDetails");
  },
};

