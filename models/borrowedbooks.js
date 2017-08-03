'use strict';
module.exports = function(sequelize, DataTypes) {
  var borrowedbooks = sequelize.define('borrowedbooks', {
    userid: DataTypes.INT,
    bookid: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return borrowedbooks;
};