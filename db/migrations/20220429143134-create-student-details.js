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
      sdt_user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" },
      },
      sdt_fullname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sdt_age: {
        type: Sequelize.INTEGER,
      },
      sdt_gender: {
        type: Sequelize.STRING,
      },
      sdt_class: {
        type: Sequelize.STRING,
      },
      sdt_contact: {
        type: Sequelize.STRING,
      },
      sdt_parent_contact: {
        type: Sequelize.STRING,
      },
      sdt_photo_filename: {
        type: Sequelize.STRING,
      },
      sdt_photo_filepath: {
        type: Sequelize.STRING,
      },
      sdt_date_joined: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      sdt_birthdate: {
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
