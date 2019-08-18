module.exports = function(sequelize, DataTypes) {
  var Enemies = sequelize.define("Enemies", {
    name: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    image_idle: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    image_run: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    image_attack: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    image_death: DataTypes.STRING,
    health: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    defense: DataTypes.INTEGER
  });
  return Enemies;
};
