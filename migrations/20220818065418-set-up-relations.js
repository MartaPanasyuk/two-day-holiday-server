'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('experiences', 'cityId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'cities',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    await queryInterface.addColumn('places', 'experienceId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'experiences',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('experiences', 'cityId');
    await queryInterface.removeColumn('places', 'experienceId');
  },
};
