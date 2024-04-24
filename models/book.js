const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequalize');

class Book extends Model {}

Book.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        sequelize,
        modelName: 'Book'
    }
);

module.exports = Book;