import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const User = sequelize.define('User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        maidenName: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender:DataTypes.STRING,
        email:DataTypes.STRING,
        phone:DataTypes.STRING,
        username:DataTypes.STRING,
        password:DataTypes.STRING

    },
    {
        tableName: 'users',
        timestamps: false
    });

export default User;
