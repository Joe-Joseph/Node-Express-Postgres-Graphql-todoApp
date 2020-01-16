'use strict';
module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define('tasks', {
    name: {
      type: DataTypes.STRING,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    }
  }, {});
  tasks.associate = function(models) {
    // associations can be defined here
  };
  return tasks;
};