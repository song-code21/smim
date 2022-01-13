'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: "id" ,sourceKey: 'user_id'});
      User.hasMany(models.Like, { foreignKey: "id", sourceKey: "user_id" });  
      User.hasMany(models.Comment, { foreignKey: "id", sourceKey: "user_id" });
      // define association here
    }
  }
  User.init(
    {
      userid: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      social: DataTypes.STRING,
      state: DataTypes.STRING,
      nickname: DataTypes.STRING,
      image: DataTypes.TEXT,
      birthdate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return User;
};