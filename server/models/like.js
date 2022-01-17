'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.like.belongsTo(models.user, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.like.belongsTo(models.post, {
        foreignKey: "target_id",
        sourceKey: "id",
      });
      models.like.belongsTo(models.comment, {
        foreignKey: "target_id",
        sourceKey: "id",
      });
    }
  }
  like.init(
    {
      target_type: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "like",
    }
  );
  return like;
};