'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Like.belongsTo(models.User, { foreignKey: "id", targetKey: "user_id" });
      Like.belongsTo(models.Post, { foreignKey: "id", targetKey: "target_id" });
      Like.belongsTo(models.comment, { foreignKey: "id", targetKey: "target_id" });
    }
  }
  Like.init(
    {
      user_id: DataTypes.INTEGER,
      target_type: DataTypes.INTEGER,
      target_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "like",
    }
  );
  return Like;
};