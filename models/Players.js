module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define("Players", {
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  //app crashed at this file association not working
  Players.associate = function(models) {
    Players.belongsTo(models.Characters, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  Players.associate = function(models) {
    Players.hasOne(models.CurrentGame, {
      as: "CurrentPlayerId",
      foreignKey: "CurrentGameId"
    });
  };

  return Players;
  // console.log(Players)
};
// module.exports = function(sequelize, DataTypes) {
//   var Player = sequelize.define("Player", {
//     name: DataTypes.STRING,
//     // eslint-disable-next-line camelcase
//     image_idle: DataTypes.STRING,
//     // eslint-disable-next-line camelcase
//     image_run: DataTypes.STRING,
//     // eslint-disable-next-line camelcase
//     image_attack: DataTypes.STRING,
//     // eslint-disable-next-line camelcase
//     image_death: DataTypes.STRING,
//     health: DataTypes.INTEGER,
//     strength: DataTypes.INTEGER,
//     defense: DataTypes.INTEGER,
//     createdAt: {
//       allowNull: false,
//       type: DataTypes.DATE,
//       defaultValue: sequelize.literal("CURRENT_TIMESTAMP") 
//     },
//     updatedAt: {
//       allowNull: false,
//       type: DataTypes.DATE,
//       defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
//     }
//   });
//   return Player;
// };


