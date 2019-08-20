module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        first_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
  
        last_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
  
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: { isEmail: { msg: "Invalid email format." } }
        },
  
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
  
      },
      { underscored: true }
    );
  
    User.associate = models => {
      User.hasMany(models.Log, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  