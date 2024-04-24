const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequalize');

class User extends Model {}

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        sequelize,
        modelName: 'User'
    }
);

module.exports = User;