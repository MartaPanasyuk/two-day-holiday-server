'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      place.belongsTo(models.experience, { foreignKey: 'experienceId' });
    }
  }
  place.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longtitude: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'place',
    }
  );
  return place;
};
