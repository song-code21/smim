'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.hasMany(models.Comment, { foreignKey: "id", sourceKey: "post_id" });
      Post.hasMany(models.post_tag, { foreignKey: "id", sourceKey: "post_id" });
      Post.hasMany(models.Like, {foreignKey: "id", sourceKey: "target_id"});
      Post.belongsTo(models.User, {
        foreignKey: "id",
        targetKey: "user_id",
      });
    }
  }
  Post.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      textcontent: DataTypes.TEXT,
      view: DataTypes.INTEGER,
      targetage: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return Post;
};