'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("posts", "user_id"),
      queryInterface.removeColumn("comments", "post_id"),
      queryInterface.removeColumn("comments", "user_id"),
      queryInterface.removeColumn("likes", "user_id"),
      queryInterface.removeColumn("likes", "target_id"),
      queryInterface.removeColumn("post_tags", "post_id"),
      queryInterface.removeColumn("post_tags", "tag_id")
    ]);
    

  }
};
