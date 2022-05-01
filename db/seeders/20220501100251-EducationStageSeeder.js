"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("EducationStages", [
      {
        id: 1,
        st_name: "SD",
        st_desc: "Sekolah Dasar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        st_name: "SMP",
        st_desc: "Sekolah Menengah Pertama",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        st_name: "SMA",
        st_desc: "Sekolah Menengah Atas",
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

