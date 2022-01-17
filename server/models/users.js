'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasMany(models.post, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.user.hasMany(models.like, {
        foreignKey: "user_id",
        sourceKey: "id",
      });  
      models.user.hasMany(models.comment, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      // define association here
    }
  }
  user.init(
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
  return user;
};