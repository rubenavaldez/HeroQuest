module.exports = function(sequelize, DataTypes) {
  var Characters = sequelize.define("Characters", {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    // eslint-disable-next-line camelcase
    image_idle: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    image_run: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    image_attack: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    image_death: DataTypes.STRING,
    health: DataTypes.INTEGER,
    stength: DataTypes.INTEGER,
    defense: DataTypes.INTEGER
  });
  return Characters;
};
