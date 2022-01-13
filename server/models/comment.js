'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {
        foreignKey: "id",
        targetKey: "user_id",
      });
      Comment.belongsTo(models.Post, {
        foreignKey: "id",
        targetKey: "post_id",
      });
    }
  }
  Comment.init(
    {
      user_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return Comment;
};