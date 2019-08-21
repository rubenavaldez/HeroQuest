module.exports = function(sequelize, DataTypes) {
  var CurrentGame = sequelize.define("CurrentGame", {
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
  CurrentGame.associate = function(models) {
    CurrentGame.belongsTo(models.Players, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return CurrentGame;
  // console.log(Players)
};

// User.belongsToMany(Team, {
//     through: 'users_teams',
//     foreignKey: 'user_id',
//     otherKey: 'team_id'
//   });
  
//   Team.belongsToMany(User, {
//     through: 'users_teams',
//     foreignKey: 'team_id',
//     otherKey: 'user_id'
//   });