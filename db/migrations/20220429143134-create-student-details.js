"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("StudentDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sdt_sac_id: {
        type: Sequelize.INTEGER,
      },
      sdt_fullname: {
        type: Sequelize.STRING,
      },
      sdt_age: {
        type: Sequelize.INTEGER,
      },
      sdt_gender: {
        type: Sequelize.STRING,
      },
      sdt_edu: {
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
      sdt_photofilename: {
        type: Sequelize.STRING,
      },
      sdt_photo: {
        type: Sequelize.BLOB,
      },
      sdt_date_joined: {
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
