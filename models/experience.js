'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      experience.belongsTo(models.city, { foreignKey: 'cityId' });

      experience.hasMany(models.place, { foreignKey: 'experienceId' });
    }
  }
  experience.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'experience',
    }
  );
  return experience;
};
