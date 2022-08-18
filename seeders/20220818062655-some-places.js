'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'places',
      [
        {
          name: "Musée d'Orsay",
          description:
            "The Musée d'Orsay features an impressive nineteenth century art collection covering the artistic period between the works of art found in the Louvre and those in the Centre Pompidou, from 1848 to 1914.",
          latitude: 48.859962,
          longtitude: 2.326561,
          experienceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Eiffel Tower',
          description:
            "A symbol of Paris and more generally of France, the Eiffel Tower, built by Gustave Eiffel for the 1889 World's Fair, is one of the world's most visited monuments.",
          latitude: 48.858093,
          longtitude: 2.294694,
          experienceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Palais Royal',
          description:
            'The Palais Royal (Royal Palace) is located to the north of the Louvre. Curiously, despite its name, the palace was built as a residence for Cardinal Richelieu and not for the Royal Family.',
          latitude: 48.865,
          longtitude: 2.3377,
          experienceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Louvre',
          description:
            'There are plenty of good reasons to visit the Louvre! So many works of art to discover in this fabulous museum that used to be a palace!',
          latitude: 48.860294,
          longtitude: 2.338629,
          experienceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Casa Batlló',
          description:
            'Casa Batlló (officially Museo modernista de Antoni Gaudí ) is one of the major landmarks in Barcelona and was designed by the architect Antoni Gaudí in a modernist architectural style.',
          latitude: 41.39164,
          longtitude: 2.16477,
          experienceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'La Sagrada Família',
          description:
            "If you have time for only one sightseeing outing in Barcelona, La Sagrada Família should be it. Gaudí's unparalleled, Unesco-listed La Sagrada Família inspires awe by its sheer verticality.",
          latitude: 41.403706,
          longtitude: 2.173504,
          experienceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Basílica de Santa Maria del Mar',
          description:
            'For a short visit to this church, you will not lose much time: you can walk in and out in five minutes. If you opt for a tour in which you also climb (among other things) the roof.',
          latitude: 41.383888,
          longtitude: 2.182071,
          experienceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mercat de la Boqueria',
          description:
            'Spain is a flurry of sights and smells and sounds, and no place exemplifies this better than Mercat de Sant Josep de la Boqueria',
          latitude: 41.381741,
          longtitude: 2.171585,
          experienceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Camp Nou',
          description:
            'The Camp Nou Experience tour lasts 2 hours with an English-speaking guide. Time to take a look behind the scenes and at all the facilities of the legendary FC Barcelona stadium.',
          latitude: 41.381741,
          longtitude: 2.171585,
          experienceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'La Sagrada Família',
          description:
            'the world-famous Basílica de la Sagrada Família. Even though construction began in 1882, the basilica remains uncompleted to this very day. In fact, it will take approximately 30 years from now for the building to be completely finished.',
          latitude: 41.403706,
          longtitude: 2.173504,
          experienceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'La Sagrada Família',
          description:
            'the world-famous Basílica de la Sagrada Família. Even though construction began in 1882, the basilica remains uncompleted to this very day. In fact, it will take approximately 30 years from now for the building to be completely finished.',
          latitude: 41.403706,
          longtitude: 2.173504,
          experienceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jordaan',
          description:
            'The Jordaan is a district in the centre of Amsterdam. It used to be a working-class neighbourhood, but has become one of the most upscale areas of the Netherlands',
          latitude: 52.37249851,
          longtitude: 4.875663164,
          experienceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'De 9 Straatjes',
          description:
            'The Jordaan is a district in the centre of Amsterdam. It used to be a working-class neighbourhood, but has become one of the most upscale areas of the Netherlands',
          latitude: 52.37249851,
          longtitude: 4.875663164,
          experienceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('places', null, {});
  },
};
