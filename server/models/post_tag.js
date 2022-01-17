'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.post_tag.belongsTo(models.post, {
        foreignKey: "post_id",
        sourceKey: "id",
      });
      models.post_tag.belongsTo(models.tag, {
        foreignKey: "post_id",
        sourceKey: "id",
      });
    }
  }
  post_tag.init(
    {

    }
    ,
    {
      sequelize,
      modelName: "post_tag",
    }
  );
  return post_tag;
};