'use strict';
module.exports = function(sequelize, DataTypes) {
  var books = sequelize.define('books', {
    bookid: DataTypes.INT,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    publishdate: DataTypes.DATE,
    isbn: DataTypes.STRING,
    page - num: DataTypes.INT,
    book - image - url: DataTypes.STRING,
    numofbooks: DataTypes.INT,
    book - category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return books;
};