'use strict';
module.exports = function(sequelize, DataTypes) {
  var reguser = sequelize.define('reguser', {
    userid: DataTypes.INT,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    securityq: DataTypes.STRING,
    securityans: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return reguser;
};