'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.post.hasMany(models.comment, { foreignKey: 'posrt_id', sourceKey: 'id' });
      models.post.hasMany(models.post_tag, {
        foreignKey: 'post_id',
        sourceKey: 'id',
      });
      models.post.hasMany(models.like, {
        foreignKey: 'target_id',
        sourceKey: 'id',
      });
      models.post.belongsTo(models.user, {
        foreignKey: 'user_id',
        targetKey: 'id',
      });
    }
  }
  post.init(
    {
      title: DataTypes.STRING,
      textcontent: DataTypes.TEXT,
      view: DataTypes.INTEGER,
      targetage: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'post',
    }
  );
  return post;
};
