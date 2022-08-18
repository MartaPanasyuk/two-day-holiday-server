'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'cities',
      [
        {
          name: 'Amsterdam',
          picture:
            'https://i.pinimg.com/564x/de/0b/b4/de0bb4e0448983ce548ad97b33438234.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Barcelona',
          picture:
            'https://i.pinimg.com/564x/78/8e/c0/788ec0907b68dfe29cda89d019684b72.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Paris',
          picture:
            'https://i.pinimg.com/564x/5d/56/34/5d5634f4a1ee8017c79eac486c72004a.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cities', null, {});
  },
};
