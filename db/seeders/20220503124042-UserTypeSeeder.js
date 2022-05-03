"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("UserTypes", [
      {
        id: 1,
        ut_name: "Teacher",
        ut_desc: "Guru yang mengajar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        ut_name: "Student",
        ut_desc: "Murid yang mengikuti pelajaran",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
