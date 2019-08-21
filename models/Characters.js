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
    strength: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  Characters.associate = function(models) {
    Characters.hasMany(models.Players, {});
  };
  return Characters;
};
