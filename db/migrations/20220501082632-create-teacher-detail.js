"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TeacherDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tdt_user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      tdt_fullname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tdt_age: {
        type: Sequelize.INTEGER,
      },
      tdt_gender: {
        type: Sequelize.STRING,
      },
      tdt_contact: {
        type: Sequelize.STRING,
      },
      tdt_photo_filename: {
        type: Sequelize.STRING,
      },
      tdt_photo_filepath: {
        type: Sequelize.STRING,
      },
      tdt_date_joined: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      tdt_birthdate: {
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
    await queryInterface.dropTable("TeacherDetails");
  },
};
