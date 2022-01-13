'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.hasMany(models.post_tag, { foreignKey: "id", sourceKey: "tag_id" });
    }
  }
  Tag.init({
    tagname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tag',
  });
  return Tag;
};