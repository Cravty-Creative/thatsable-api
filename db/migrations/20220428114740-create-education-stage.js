"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("EducationStages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      st_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      st_desc: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("EducationStages");
  },
};
