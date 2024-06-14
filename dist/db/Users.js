import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class Users extends Model {}
Users.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
    },
    phone: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
    role: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    status: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
    rating: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Users',
    modelName: 'Users',
  }
);

export default Users;